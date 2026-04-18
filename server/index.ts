import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const SEO_STATIC = ['/robots.txt', '/sitemap.xml'];

// Lightweight in-memory rate limiter for /admin/cache/clear
// Max 5 requests per IP per 60-second window.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
interface RateBucket { count: number; resetAt: number }
const rateBuckets = new Map<string, RateBucket>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  let bucket = rateBuckets.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateBuckets.set(ip, bucket);
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

// Periodically evict expired buckets so the map does not grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [ip, bucket] of rateBuckets) {
    if (now >= bucket.resetAt) rateBuckets.delete(ip);
  }
}, RATE_LIMIT_WINDOW_MS);

async function startServer() {
  const app = express();

  app.disable('x-powered-by');
  // Trust one proxy hop (Replit's edge proxy) so req.ip resolves to the real
  // client IP from X-Forwarded-For rather than the proxy's address.
  // This is safe because only the innermost trusted proxy appends the entry.
  app.set('trust proxy', 1);
  app.use(compression());

  // www → non-www canonical redirect (constrained to known domain)
  app.use((req, res, next) => {
    const host = req.headers.host || '';
    if (host === 'www.tariqservices.site') {
      return res.redirect(301, `https://tariqservices.site${req.url}`);
    }
    next();
  });

  const { getBlogIndexHtml, getBlogPostHtml, prewarmBlogCaches, clearBlogCaches } = await import('./blog.js');
  const { getHomeHtml, clearHomeCache } = await import('./home.js');
  const { getIntegrationsHtml } = await import('./integrations.js');

  if (isProd) {
    getHomeHtml(true);
    console.log('SSR home page cache pre-warmed');
    prewarmBlogCaches();
    console.log('SSR blog index and post caches pre-warmed');
  }

  app.post('/admin/cache/clear', (req, res) => {
    // Use the raw socket address as the rate-limit key — it is the only IP
    // that cannot be forged by the client. In production all external requests
    // arrive via Replit's proxy, so the socket address is the proxy's IP and
    // all callers share one bucket.  That is acceptable: the endpoint is
    // admin-only and legitimately called at most a handful of times per hour.
    const ip = req.socket.remoteAddress || 'unknown';

    if (isRateLimited(ip)) {
      res.setHeader('Retry-After', '60');
      res.status(429).json({ error: 'Too many requests. Try again in 60 seconds.' });
      return;
    }

    const token = process.env.CACHE_CLEAR_TOKEN;
    if (!token) {
      res.status(503).json({ error: 'Cache clear endpoint is not configured (CACHE_CLEAR_TOKEN not set).' });
      return;
    }
    const authHeader = req.headers['authorization'] || '';
    const provided = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!provided || provided !== token) {
      res.status(401).json({ error: 'Unauthorized.' });
      return;
    }
    clearBlogCaches();
    clearHomeCache();
    console.log('[cache] Blog and home caches cleared via /admin/cache/clear');
    res.json({ cleared: ['blogIndex', 'blogPosts', 'home'] });
  });

  if (isProd) {
    const distPublic = path.resolve(__dirname, 'public');

    app.use((req, res, next) => {
      if (SEO_STATIC.includes(req.path)) return next();
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      next();
    });

    app.get('/robots.txt', (_req, res) => {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.sendFile(path.join(distPublic, 'robots.txt'));
    });

    app.get('/sitemap.xml', (_req, res) => {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.sendFile(path.join(distPublic, 'sitemap.xml'));
    });

    // SSR Home route — SEO shell + React SPA hydration
    app.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
      res.send(getHomeHtml(true));
    });

    // SSR Blog routes
    app.get('/blog', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(getBlogIndexHtml());
    });

    app.get('/blog/:slug', (req, res) => {
      const html = getBlogPostHtml(req.params.slug);
      if (!html) { res.status(404).end(); return; }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(html);
    });

    // SSR Integrations resource page
    app.get('/integrations', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(getIntegrationsHtml());
    });

    app.use(
      express.static(distPublic, {
        maxAge: '1y',
        etag: true,
        index: false,
      }),
    );

    app.get('*', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.sendFile(path.join(distPublic, 'index.html'));
    });

  } else {
    const { createServer: createViteServer } = await import('vite');

    const vite = await createViteServer({
      server: { middlewareMode: true, allowedHosts: true },
      appType: 'spa',
      configFile: './vite.config.ts',
    });

    app.use((req, res, next) => {
      if (SEO_STATIC.includes(req.path)) return next();
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      next();
    });

    app.get('/robots.txt', (_req, res) => {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.sendFile(path.resolve('./client/public/robots.txt'));
    });

    app.get('/sitemap.xml', (_req, res) => {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.sendFile(path.resolve('./client/public/sitemap.xml'));
    });

    // SSR Home route (dev) — SEO shell + Vite React SPA hydration
    app.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(getHomeHtml(false));
    });

    // SSR Blog routes (dev)
    app.get('/blog', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(getBlogIndexHtml());
    });

    app.get('/blog/:slug', (req, res) => {
      const html = getBlogPostHtml(req.params.slug);
      if (!html) { res.status(404).end(); return; }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(html);
    });

    // SSR Integrations resource page (dev)
    app.get('/integrations', (_req, res) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(getIntegrationsHtml());
    });

    app.use(vite.middlewares);
  }

  const port = parseInt(process.env.PORT || '5000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer();

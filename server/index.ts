import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const SEO_STATIC = ['/robots.txt', '/sitemap.xml'];

async function startServer() {
  const app = express();

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

    app.use(
      express.static(distPublic, {
        maxAge: '1y',
        etag: true,
        index: false,
      }),
    );

    app.get('*', (_req, res) => {
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

    app.use(vite.middlewares);
  }

  const port = parseInt(process.env.PORT || '5000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer();

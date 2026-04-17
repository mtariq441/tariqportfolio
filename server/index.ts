import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';

const SEO_STATIC = ['/robots.txt', '/sitemap.xml'];

const startDevServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      allowedHosts: true,
    },
    appType: 'spa',
    configFile: './vite.config.ts',
  });

  app.use((req, res, next) => {
    if (SEO_STATIC.includes(req.path)) {
      return next();
    }
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    next();
  });

  app.get('/robots.txt', (req, res) => {
    const filePath = path.resolve('./client/public/robots.txt');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.sendFile(filePath);
  });

  app.get('/sitemap.xml', (req, res) => {
    const filePath = path.resolve('./client/public/sitemap.xml');
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.sendFile(filePath);
  });

  app.use(vite.middlewares);

  app.listen(5000, '0.0.0.0', () => {
    console.log('Dev server running on http://0.0.0.0:5000');
  });
};

startDevServer();

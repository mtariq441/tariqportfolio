import express from 'express';
import { createServer as createViteServer } from 'vite';

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
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    next();
  });

  app.use(vite.middlewares);

  app.listen(5000, '0.0.0.0', () => {
    console.log('Dev server running on http://0.0.0.0:5000');
  });
};

startDevServer();

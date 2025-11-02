import express from "express";
import { createServer } from "vite";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const startDevServer = async () => {
  const vite = await createServer({
    server: {
      middlewareMode: true,
      host: '0.0.0.0',
    },
    configFile: './vite.config.ts',
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.listen(5000, '0.0.0.0', () => {
    console.log('Vite dev server running on port 5000');
  });
};

startDevServer();

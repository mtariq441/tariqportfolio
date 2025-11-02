import { createServer } from 'vite';

const startDevServer = async () => {
  const server = await createServer({
    server: {
      port: 5000,
      host: '0.0.0.0',
    },
    configFile: './vite.config.ts',
  });

  await server.listen();
  console.log('Vite dev server running on port 5000');
};

startDevServer();

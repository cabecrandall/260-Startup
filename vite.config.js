import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/user': 'http://localhost:3000',
      '/auth': 'http://localhost:3000',
      '/me': 'http://localhost:3000',
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
});
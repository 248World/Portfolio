import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const page = (path) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: '/Portfolio/',

  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        scoreboard: page('./scoreboard/index.html'),
        weather: page('./weather/index.html'),
      },
    },
  },
});
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
        cv: page('./cv.html'),
        nestedCv: page('./cv/cv.html'),
        notes: page('./noteapp.html'),
        scoreboard: page('./scoreindex.html'),
        todo: page('./todo.html'),
        weather: page('./weather.html'),
      },
    },
  },
});

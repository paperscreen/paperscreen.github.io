import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paperscreen.github.io',
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  integrations: [tailwind()],
  vite: {
    build: {
      sourcemap: false
    }
  }
});

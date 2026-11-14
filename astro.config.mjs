import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ahsanasid.github.io',
  base: '/Portfolio-Website/',
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory',
  },
});

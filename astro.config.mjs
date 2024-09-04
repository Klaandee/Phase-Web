import { defineConfig } from "astro/config"
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  // site: 'localhost:4321',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  integrations: [tailwind()],
});
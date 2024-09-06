import { defineConfig } from "astro/config"
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
export default defineConfig({
  // site: 'localhost:4321',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  integrations: [tailwind(), react()],
});
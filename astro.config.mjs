import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iipha.org',
  integrations: [
    sitemap({
      // The root route only chooses a language and is intentionally noindex.
      filter: (page) => new URL(page).pathname !== '/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fa: 'fa',
        },
      },
    }),
  ],
  trailingSlash: 'never',
  server: { port: Number(process.env.PORT) || 4321 },
});

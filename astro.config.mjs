import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo from a subpath, not the domain root. Drop
// `base` (and use src/i18n.ts's `path`) if this ever moves to its own domain.
const base = '/iipha-site';

export default defineConfig({
  site: 'https://kaveh1234.github.io',
  base,
  integrations: [
    sitemap({
      // The base route only chooses a language and is intentionally noindex.
      filter: (page) => new URL(page).pathname.replace(/\/$/, '') !== base,
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

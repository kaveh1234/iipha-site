import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo from a subpath, not the domain root. Drop
// `base` (and use src/i18n.ts's `path`) if this ever moves to its own domain.
export default defineConfig({
  site: 'https://kaveh1234.github.io',
  base: '/iipha-site',
  trailingSlash: 'never',
  server: { port: Number(process.env.PORT) || 4321 },
});

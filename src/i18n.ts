import en from './content/en.json';
import fa from './content/fa.json';

export const copy = { en, fa };

export type Lang = keyof typeof copy;
export type Page = 'about' | 'donate';

export const langs = Object.keys(copy) as Lang[];

// Every internal link goes through this so the site works both at the domain
// root and under the /iipha-site/ subpath GitHub Pages serves it from.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (p: string) => `${base}${p}`;

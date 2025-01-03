import { defineConfig } from 'unocss';
import { presetUno } from 'unocss';

const px = (scale) => `${320 * scale}px`;

export default defineConfig({
  presets: [presetUno()],
  rules: [
    ['font-sans', { 'font-family': 'var(--font-sans)' }],
    ['font-serif', { 'font-family': 'var(--font-serif)' }],
    ['font-mono', { 'font-family': 'var(--font-mono)' }],
  ],
  shortcuts: {
    'icon-text': 'p-2 flex items-center gap-2 [&>svg]:w-4 [&>svg]:h-4 text-inherit',
    'icon-big': 'hover:scale-125 transition-all text-inherit',
    'nav-link': 'underline decoration-1.5 text-main font-bold hover:text-link hover:decoration-0 transition-all',
    'nav-active': 'nav-link text-active',
    'rounded-shadow': 'hover:bg-slate-400 rounded-xl transition-all',
  },
  theme: {
    breakpoints: {
      sm: px(1),
      md: px(2),
      lg: px(3),
      xl: px(4),
    },
    colors: {
      primary: 'var(--primary-color)',
      main: 'var(--main-color)',
      sub: 'var(--sub-color)',
      link: 'var(--link-color)',
      active: 'var(--active-color)',
    },
  },
});

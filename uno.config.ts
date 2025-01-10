import { defineConfig, presetUno } from 'unocss';

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
    'rounded-shadow': 'hover:bg-slate-400 rounded-xl transition-all duration-200',
    // Footer
    'footer-frame': 'py-6 px-8 flex justify-center items-center bg-sub',
    'footer-body': 'w-full flex flex-col gap-4 text-main max-w-[var(--md-width)] md:max-w-[var(--lg-width)]',
    'social-icons': 'flex flex-wrap gap-5 justify-center items-center',
    'nav-list': 'w-full flex flex-wrap justify-around',
    'nav-link': 'underline decoration-1.5 text-main font-bold hover:text-link hover:decoration-0 transition-all',
    'nav-active': 'nav-link text-active',
    // Sidebar
    'sidebar-body':
      'min-w-[300px] max-w-[300px] py-8 px-6 flex-col gap-7 justify-center items-center rounded-xl text-main bg-sub h-min hidden xl:flex',
    'heading-list': 'overflow-y-auto w-full max-h-[var(--sm-width)] flex flex-col gap-2',
    'heading-text': 'break-words text-wrap no-underline hover:underline hover:text-link transition-all',
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
  safelist: [...Array.from({ length: 6 }, (_, i) => `ml-${(i + 1) * 3}`)],
});

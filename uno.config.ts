import { defineConfig } from 'unocss';
import { presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  rules: [
    ['font-sans', { 'font-family': 'var(--font-sans)' }],
    ['font-serif', { 'font-family': 'var(--font-serif)' }],
    ['font-mono', { 'font-family': 'var(--font-mono)' }],
  ],
  shortcuts: {},
  theme: {
    breakpoints: {
      sm: '320px',
      md: '640px',
      lg: '960px',
      xl: '1280px',
    },
  },
});

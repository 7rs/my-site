import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import UnoCSS from 'unocss/astro';

import tsconfig from './tsconfig.json' assert { type: 'json' };
import { getAliases } from './scripts/alias.ts';

export default defineConfig({
  server: { host: true, port: 2999 },
  integrations: [svelte({ emitCss: false }), icon({ iconDir: 'src/icons' }), UnoCSS()],
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  site: 'https://7rs.dev',
});

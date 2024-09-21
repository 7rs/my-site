import path from 'node:path';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';

import tsconfig from './tsconfig.json';

function getAliasesArray() {
  let aliasesArray: { [key: string]: string } = {};

  for (const [alias, targetPath] of Object.entries(tsconfig.compilerOptions.paths)) {
    aliasesArray = {
      ...aliasesArray,
      ...{
        [alias]: path.resolve(targetPath[0]),
      },
    };
  }

  return aliasesArray;
}

export default defineConfig({
  vite: {
    resolve: {
      alias: getAliasesArray(),
    },
  },
  site: 'https://7rs.dev',
  integrations: [svelte(), UnoCSS()],
});

import path from 'node:path';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import UnoCSS from 'unocss/astro';
import purgecss from 'astro-purgecss';
import playformCompress from '@playform/compress';

import tsconfig from './tsconfig.json';

/**
 * Registers the paths registered in compilerOptions.paths in tsconfig.json as alias for Vite.
 *
 * Example: 
 * ```ts
  {
    "@layouts/*": ["src/layouts/*"],
    "@components/*": ["src/components/*"]
  }
  ```
 */
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
  site: 'https://7rs.dev',
  vite: {
    resolve: {
      alias: getAliasesArray(),
    },
  },
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: 'dracula',
    },
  },
  build: {
    assets: Math.random().toString(36).substring(2),
  },
  integrations: [svelte(), icon(), mdx(), UnoCSS(), purgecss(), playformCompress()],
});

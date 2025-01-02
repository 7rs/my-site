import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import UnoCSS from 'unocss/astro';
import purgecss from 'astro-purgecss';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';

import astrobook from 'astrobook';

import tsconfig from './tsconfig.json' assert { type: 'json' };
import { getAliases } from './scripts/alias.ts';

export default defineConfig({
  server: { host: true, port: 2999 },

  integrations: [
    icon({ iconDir: 'src/icons' }),
    svelte({ emitCss: false }),
    mdx(),
    UnoCSS(),
    purgecss(),
    playformCompress(),
    compressor({ brotli: true }),
    import.meta.env.DEV &&
      astrobook({
        directory: 'src/components/astrobook-stories',
        head: '@layouts/Astrobook.astro',
        subpath: '/astrobook',
        title: 'Astrobook - Components',
      }),
  ],
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
  },
  site: 'https://7rs.dev',
  markdown: {
    gfm: false,
    shikiConfig: {
      theme: 'dracula',
    },
  },
});

/** @type {import('stylelint').Config} */

export default {
    extends: [
      'stylelint-config-html',
      'stylelint-config-html/svelte',
      'stylelint-config-html/astro',
      'stylelint-stylus/standard',
    ],
    customSyntax: 'postcss-html',
    overrides: [
      {
        files: ['*.styl', '**/*.styl'],
        customSyntax: 'postcss-styl',
      },
    ],
    rules: {
      'stylus/selector-list-comma-newline-after': 'always-multi-line',
      'stylus/selector-list-comma': 'always',
    },
  };

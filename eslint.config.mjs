// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginPromise from 'eslint-plugin-promise';
import nodePlugin from 'eslint-plugin-n';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import vitest from '@vitest/eslint-plugin';
// import oxlint from 'eslint-plugin-oxlint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  pluginPromise.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended-script'],
  jsxA11y.flatConfigs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  vitest.configs.recommended,
  // oxlint.configs['flat/recommended'],

  {
    ignores: ['**/.astro/**', '**/.vscode/**', '**/dist/**', '**/node_modules/**', './docs/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
    },
  },

  {
    files: ['env.d.ts', '**/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
);

import minecraftLinting from 'eslint-plugin-minecraft-linting';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import type { Linter } from 'eslint';

export default [
  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
    },
    plugins: {
      ts,
      'minecraft-linting': minecraftLinting,
    },
    rules: {
      'minecraft-linting/avoid-unnecessary-command': 'error',
    },
  },
] as Linter.Config;

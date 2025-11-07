import { defineConfig, globalIgnores } from 'eslint/config';
import angularEslint from '@angular-eslint/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import preferArrow from 'eslint-plugin-prefer-arrow';
import { fixupPluginRules } from '@eslint/compat';
import typescriptParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(['**/*.html', '**/dist', '**/coverage']),
  {
    extends: compat.extends('prettier'),

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script'
    }
  },
  {
    files: ['**/*.ts'],

    plugins: {
      '@angular-eslint': angularEslint,
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
      jsdoc,
      'prefer-arrow': preferArrow
    },

    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      }
    },

    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true
        }
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'st',
          style: 'kebab-case'
        }
      ],

      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'st',
          style: 'camelCase'
        }
      ],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
]);

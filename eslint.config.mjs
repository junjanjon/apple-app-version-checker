import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: {
    parser: tsParser, // Ensure TypeScript parser is used
    globals: globals.browser,
  },
  plugins: { js },
  extends: ['js/recommended'],
  rules: {
    'brace-style': ['error', 'allman'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-unused-vars': ['warn'],
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': ['error'],
  },
  ignores: ['dist/**'],
});

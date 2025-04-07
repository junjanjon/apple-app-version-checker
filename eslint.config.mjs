import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  {
    // JavaScriptおよびTypeScriptファイルに適用される設定
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser, // TypeScript用のパーサを指定
      globals: {
        ...globals.node, // Node.jsのグローバル変数を追加
        ...globals.browser, // ブラウザ環境のグローバル変数を追加
      },
    },
    plugins: { js }, // JavaScript関連のルールを提供するプラグイン
    extends: ['js/recommended'], // 推奨されるJavaScriptルールセットを拡張
    rules: {
      'brace-style': ['error', 'allman'], // Allmanスタイルの波括弧を強制
      'semi': ['error', 'always'], // セミコロンを常に使用
      'quotes': ['error', 'single'], // シングルクォートを強制
      'indent': ['error', 2], // インデントを2スペースに設定
      'no-unused-vars': ['warn'], // 未使用の変数を警告
      'eqeqeq': ['error', 'always'], // 厳密等価演算子を強制
      'curly': ['error', 'all'], // すべての制御構造で波括弧を強制
      'comma-dangle': ['error', 'always-multiline'], // 複数行のリストで末尾のカンマを強制
      'no-trailing-spaces': ['error'], // 行末の不要な空白を禁止
    },
    ignores: ['dist/**'], // distフォルダ内のファイルを無視
  },
  {
    // Testファイルに適用される設定
    files: ['**/*.test.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // 最新のECMAScriptバージョンを使用
        sourceType: 'module', // ESモジュールを使用
      },
      globals: {
        ...globals.jest, // Jestのグローバル変数を追加
        ...globals.node, // Node.jsのグローバル変数を追加
      },
    },
  },
]);

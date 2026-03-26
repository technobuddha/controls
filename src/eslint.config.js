// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
// @ts-check
import { app } from '@technobuddha/project';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  app.lint({ files: ['**/*.ts'], typescript: true }),
  app.lint({ files: ['**/*.tsx'], typescript: true, react: true }),
]);

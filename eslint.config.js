// @ts-check
// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
import { app } from '@technobuddha/project';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // .
  app.lint({ files: ['*.config.js'], ignores: [], environment: 'node' }),
  // src
  app.lint({ files: ['src/**/*.ts'], ignores: [], tsConfig: 'src/tsconfig.json' }),
  // src
  app.lint({ files: ['src/**/*.tsx'], ignores: [], tsConfig: 'src/tsconfig.json', react: true }),
];

export default config;

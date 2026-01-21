// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
// @ts-check
import { app } from '@technobuddha/project';

/** @type import('eslint').Linter.Config[] */
const config = [
  { ignores: ['coverage', 'dist'] },
  // .
  app.lint({ files: ['*.config.js'], ignores: [], environment: 'node' }),
  // .
  app.lint({
    files: ['*.config.ts', '*.setup.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'tsconfig.json',
  }),
  // src
  app.lint({ files: ['src/**/*.ts'], ignores: [], tsConfig: 'src/tsconfig.json' }),
  // src
  app.lint({ files: ['src/**/*.tsx'], ignores: [], tsConfig: 'src/tsconfig.json', react: true }),
];

export default config;

import { defineConfig } from '@technobuddha/project/config';

export default defineConfig({
  directories: {
    src: {
      platform: 'vite-client',
    },
  },
  lint: {
    rules: {
      'css/no-invalid-properties': { rule: 'off' },
    },
  },
});

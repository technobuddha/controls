//@ts-check
/** @type import("\@technobuddha/project").TechnobuddhaConfig */
const config = {
  directories: {
    'src': {
      platform: 'vite-client',
    },
  },
  lint: {
    rules: {
      'css/no-invalid-properties': { rule: 'off' },
    }
  }
};

export default config;

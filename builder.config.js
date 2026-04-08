//@ts-check

/** @type {import('@technobuddha/project/build').Builds} */
const config = {
  default: {
    steps: [
      {
        name: 'Clean',
        command: 'rm -rf ./dist'
      },
      {
        name: 'Controls',
        command: 'npx tsc --build ./src',
      },
      {
        name: 'Css',
        command: 'cd src; cp $(find -name "*.css") --parents ../dist',
      }
    ]
  },
  publish: {
    steps: [
      { build: 'default' },
      {
        name: 'Version',
        command: 'yarn version patch',
      },
      {
        name: 'Publish',
        command: 'yarn npm publish --access=public',
      },
    ]
  }
};

export default config;

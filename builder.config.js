//@ts-check

/** @type {import('@technobuddha/builder').Builds} */
const config = {
  dev: {
    watch: true,
    steps: [
      {
        name: 'Clean',
        command: 'rm -rf ./dist'
      },
      {
        name: 'Controls',
        directory: './src',
        command: 'tsc --build ./src',
      },
    ],
  },
  prod: {
    steps: [
      {
        name: 'Clean',
        command: 'rm -rf ./dist',
      },
      {
        name: 'Controls',
        command: 'tsc --build ./src',
      },
      {
        name: 'Css',
        command: 'cd src; cp $(find -name "*.css") --parents ../dist',
      }
    ]
  },
  publish: {
    steps: [
      {
        name: 'Clean',
        command: 'rm -rf ./dist',
      },
      // {
      //   name: 'Controls',
      //   command: 'tsc --build ./src',
      // },
      // {
      //   name: 'Css',
      //   command: 'cd src; cp $(find -name "*.css") --parents ../dist',
      // },
      {
        name: 'Version',
        command: 'yarn version patch',
      },
      {
        name: 'Publish',
        command: 'yarn npm publish --access public',
      },
    ]
  }
};

export default config;

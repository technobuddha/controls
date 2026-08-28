import { defineBuilds } from '@technobuddha/project/build';

export default defineBuilds({
  default: {
    steps: [
      {
        display: 'Clean',
        command: 'rm -rf ./dist',
      },
      {
        display: 'Controls',
        command: 'npx tsc --build ./src',
      },
      {
        display: 'Css',
        command: 'cd src; cp $(find -name "*.css") --parents ../dist',
      },
    ],
  },
  publish: {
    steps: [
      { build: 'default' },
      {
        display: 'Version',
        command: 'yarn version prerelease',
      },
      {
        display: 'Publish',
        command: 'yarn npm publish --access=public',
      },
    ],
  },
});

//@ts-check
// eslint-disable-next-line tsdoc/syntax
/** @type {import("@technobuddha/project").TechnobuddhaConfig} */
const config = {
  directories: {
    'src': {
      environment: 'vite-client',
    },
  },
  // tsconfig: {
  //   base: {
  //     compilerOptions: {
  //       paths: {
  //         /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
  //         '#api/*': ['./src/api/*/index.ts'],
  //         '#context/*': ['./src/client/context/*/index.ts'],
  //         '#control': ['./src/control/index.ts'],
  //         '#page/*': ['./src/client/page/*/index.ts'],
  //         '#client*': ['./src/client*'],
  //         '#server/*': ['./src/server/*/index.ts'],
  //         '#util*': ['./src/util*'],
  //         '#settings*': ['./src/settings*'],
  //         '#config': ['./src/config/index.ts'],
  //         '#env': ['./src/config/env.ts'],
  //       },
  //     },
  //   },
  // },
};

export default config;

import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

type Environment = 'development';

const build: (environment: Environment) => string = (environment: Environment): string => {
  return `npx webpack --config webpack/build.${environment}.webpack.config.ts --progress`;
};

desc('Build and output the bundle');
task(('build'), () => {
  execWithLog([
    `echo '${emoji.building_construction}  Building...'`,
    build('development')
  ]);
});

namespace('build', () => {
  desc('Build the app in dev mode and analyze included unminified dependency filesizes');
  task(('analyze'), () => {
    execWithLog([`${build('development')} --json | npx webpack-bundle-size-analyzer`]);
  });

  desc('Build the app in dev mode and continuously rebuild when there are changes');
  task(('watch'), () => {
    execWithLog([`${build('development')} --watch`]);
  });
});

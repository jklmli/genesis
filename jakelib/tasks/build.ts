import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

const webpack: string = 'npx webpack --config webpack/build.webpack.config.ts --progress';

desc('Compile the app');
task(('build'), () => {
  execWithLog([
    `echo '${emoji.building_construction}  Building...'`,
    webpack
  ]);
});

namespace('build', () => {
  desc('Compile and analyze included unminified dependency filesizes');
  task(('analyze'), () => {
    execWithLog([`${webpack} --json | npx webpack-bundle-size-analyzer`]);
  });

  desc('Compile the app and continuously rebuild when there are changes');
  task(('watch'), () => {
    execWithLog([`${webpack} --watch`]);
  });
});

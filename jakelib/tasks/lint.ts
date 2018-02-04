import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

desc('Lint everything');
task('lint', () => {
  // :KLUDGE: Look into jake typings to figure out why `jake.Task` isn't explicitly typed.
  /* tslint:disable:no-any no-unsafe-any */
  (jake.Task as any)['lint:css'].invoke();
  (jake.Task as any)['lint:ts'].invoke();
  /* tslint:enable:no-any no-unsafe-any */
});

namespace('lint', () => {
  desc('Lint all CSS files');
  task('css', () => {
    execWithLog([`
      echo '${emoji.wastebasket}  Linting CSS...' &&
      stylelint './src/**/*.scss'
    `]);
  });

  desc('Lint all Typescript files - sources, tests, webpack configs, and tasks');
  task('ts', () => {
    execWithLog([`
      echo '${emoji.wastebasket}  Linting sources...' &&
      tslint --format verbose --project ./src/tsconfig.json './src/**/*.ts' &&
      echo '${emoji.wastebasket}  Linting tests...' &&
      tslint --format verbose --project ./test/tsconfig.json './test/**/*.ts' &&
      echo '${emoji.wastebasket}  Linting webpack configs...' &&
      tslint --format verbose --project ./webpack/tsconfig.json './webpack/**/*.ts' &&
      echo '${emoji.wastebasket}  Linting tasks...' &&
      tslint --format verbose --project ./jakelib/tsconfig.json './jakelib/**/*.ts'
    `]);
  });
});

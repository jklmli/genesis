import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

desc('Run tests');
task('test', () => {
  execWithLog([`
    echo '${emoji['8ball']}  Running tests...' &&
    npx webpack --config webpack/test.webpack.config.ts --progress && nyc ava --verbose
  `]);
});

namespace('test', () => {
  desc('Report coverage');
  task('report', () => {
    execWithLog([`
      echo '${emoji.mailbox_with_mail}  Reporting test coverage results...' &&
      npx -c 'nyc report --reporter=text-lcov | coveralls'
    `]);
  });
});

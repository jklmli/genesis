import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

desc('Run tests');
task('test', () => {
  execWithLog([`
    echo '${emoji['8ball']}  Running tests...' &&
    npx webpack --config webpack/test.webpack.config.ts --progress && nyc ava --verbose
  `]);
});

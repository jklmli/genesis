import { emoji } from 'node-emoji';

import { execWithLog } from '../utils/exec_with_log';

desc('Verify all Typescript files compile - sources, tests, webpack configs, and tasks');
task('smoke', () => {
  execWithLog([`
    echo '${emoji.fire}  Smoking sources...' &&
    tsc --noEmit --pretty --project ./src &&
    echo '${emoji.fire}  Smoking tests...' &&
    tsc --noEmit --pretty --project ./test &&
    echo '${emoji.fire}  Smoking webpack configs...' &&
    tsc --noEmit --pretty --project ./webpack &&
    echo '${emoji.fire}  Smoking tasks...' &&
    tsc --noEmit --pretty --project ./jakelib
  `]);
});

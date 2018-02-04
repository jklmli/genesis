import * as _ from 'lodash';

/**
 * Default to passing through stdout and stderr for commands.
 *
 * :KLUDGE: So many typedefs to make tslint happy.
 * :LINK: https://github.com/palantir/tslint/issues/2654
 */
const execWithLog: (commands: Array<string>, args?: jake.ExecOptions, callback?: () => void) => void =
  (commands: Array<string>, args?: jake.ExecOptions, callback: () => void = ((): void => { /* noop */ })): void => {
    jake.exec(commands, callback, _.extend({}, { printStdout: true, printStderr: true }, args));
  };

export { execWithLog };

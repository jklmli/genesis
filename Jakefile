const glob = require('glob');

// Support jake tasks written in TypeScript.
require('ts-node').register();

// :KLUDGE: Jake filters out files it can't parse, so manually re-add TypeScript files.
// :LINK: https://github.com/jakejs/jake/blob/2cff463b2a435218cab4e89050d7e309c1d12dbc/lib/loader.js#L108
glob.sync('./jakelib/tasks/**/*')
  .forEach(function(fileName) { require(fileName); });

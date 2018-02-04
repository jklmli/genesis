import * as path from 'path';

import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist')
  }
};

export { config as default };

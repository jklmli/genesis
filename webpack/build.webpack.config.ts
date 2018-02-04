import * as path from 'path';

import { Configuration } from 'webpack';

const config: Configuration = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

export { config as default };

import * as path from 'path';

import { Configuration, NewModule } from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as glob from 'glob';

import { default as buildConfig } from './build.webpack.config';

const config: Configuration = {
  entry: glob.sync('./test/**/*.ts', { ignore: glob.sync('./test/dist/**/*.ts') }),
  externals: ['ava'],
  module: {
    rules: (buildConfig.module as NewModule).rules
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '..', 'test', 'dist')
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

export { config as default };

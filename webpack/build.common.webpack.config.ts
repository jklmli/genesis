import * as path from 'path';

import { Configuration } from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const config: Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
      })},
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    alias: {
      // :KLUDGE: Use full Vue compiler with runtime compiler.
      // :TODO: Investigate why `vue-template-compiler` doesn't work as expected.
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.json']
  }
};

export { config as default };

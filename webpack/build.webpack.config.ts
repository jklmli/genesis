import * as path from 'path';

/* tslint:disable:variable-name */
const BrowserSyncPlugin: IConcretePlugin = require('browser-sync-webpack-plugin') as IConcretePlugin;
/* tslint:enable:variable-name */
import { Configuration, Plugin } from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 * A plugin that's new-able. Kind of a kludge for the webpack type definitions not including this.
 */
interface IConcretePlugin extends Plugin {
  new(...args: Array<{}>): Plugin;
}

const config: Configuration = {
  devtool: 'cheap-module-eval-source-map',
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
    new ExtractTextPlugin('style.css'),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        server: { index: './src/index.html' }
      },
      {
        injectCss: true
      }
    )
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

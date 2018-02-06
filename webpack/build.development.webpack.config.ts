import * as _ from 'lodash';
import * as BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { Configuration } from 'webpack';

import { default as buildCommonConfig } from './build.common.webpack.config';

const config: Configuration = _.mergeWith(
  {},
  buildCommonConfig,
  {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
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
    ]
  },
  // :TODO: Narrow return type to `T`.
  /* tslint:disable:no-any */
  <T>(objValue: T, srcValue: T): any => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
  /* tslint:enable:no-any */
);

export { config as default };

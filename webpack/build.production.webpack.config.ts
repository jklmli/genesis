import * as _ from 'lodash';
import { Configuration, DefinePlugin } from 'webpack';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { default as buildCommonConfig } from './build.common.webpack.config';

const config: Configuration = _.mergeWith(
  {},
  buildCommonConfig,
  {
    devtool: 'source-map',
    plugins: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true
      }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
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

declare module 'uglifyjs-webpack-plugin' {
  import * as webpack from 'webpack';

  interface IUglifyJsPlugin {
    new(options?: webpack.optimize.UglifyJsPlugin.Options): webpack.optimize.UglifyJsPlugin;
  }

  // :KLUDGE: Can't export a class as a module object in ES6, so hack around it with an interface.
  // :LINK: https://stackoverflow.com/a/39415662/759714
  const UglifyJsPlugin: IUglifyJsPlugin;

  export = UglifyJsPlugin;
}

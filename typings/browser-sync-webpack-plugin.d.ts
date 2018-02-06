declare module 'browser-sync-webpack-plugin' {
  import { Plugin } from 'webpack';

  /**
   * A plugin that's new-able. Kind of a kludge for the webpack type definitions not including this.
   */
  interface IConcretePlugin extends Plugin {
    new(...args: Array<{}>): Plugin;
  }

  const BrowserSyncPlugin: IConcretePlugin;

  export = BrowserSyncPlugin;
}

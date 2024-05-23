const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        errors: true,
        runtimeErrors: (error) => {
          if (error.message === 'ResizeObserver loop completed with undelivered notifications.') {
            return false;
          }
          return true;
        },
        warnings: false,
      },
    }
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/AIMusic/'
    : '/',
});

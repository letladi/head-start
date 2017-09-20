const webpack = require('webpack');
const path = require('path');

const paths = require('./webpack/config').paths;
const outputFiles = require('./webpack/config').outputFiles;
const rules = require('./webpack/config').rules;
const plugins = require('./webpack/config').plugins;
const resolve = require('./webpack/config').resolve;
const IS_PRODUCTION = require('./webpack/config').IS_PRODUCTION;
const IS_DEVELOPMENT = require('./webpack/config').IS_DEVELOPMENT;

const devServer = require('./webpack/dev-server').devServer;

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Default client app entry file
const entry = [
  path.join(paths.javascript, 'client.js'),
];

plugins.push(
  // Creates vendor chunk from modules coming from node_modules folder
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: outputFiles.vendor,
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  // Builds index.html from template
  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    path: paths.build,
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  })
);

if (IS_DEVELOPMENT) {
  // Development plugins
  plugins.push(
    // Enables HMR
    new webpack.HotModuleReplacementPlugin(),
    // Don't emmit build when there was an error while compiling
    // No assets are emitted that include errors
    new webpack.NoEmitOnErrorsPlugin(),
    // Webpack dashboard plugin
    new DashboardPlugin()
  );

  // In development we add 'react-hot-loader' for .js/.jsx files
  // Check rules in config.js
  rules[0].use.unshift('react-hot-loader/webpack');
  entry.unshift('react-hot-loader/patch');
}

// Webpack config
module.exports = {
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: paths.javascript,
  watch: !IS_PRODUCTION,
  entry,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: outputFiles.client,
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
};

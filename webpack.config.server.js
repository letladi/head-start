const fs = require('fs');

const paths = require('./webpack/config').paths;
const rules = require('./webpack/config').rules;
const plugins = require('./webpack/config').plugins;
const resolve = require('./webpack/config').resolve;
const IS_PRODUCTION = require('./webpack/config').IS_PRODUCTION;

// Webpack config
const config = {
  target: 'node',
  watch: !IS_PRODUCTION,
  devtool: IS_PRODUCTION ? false : 'source-map',
  context: paths.javascript,
  entry: [
    './server.js',
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'server.js',
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  // Fix for node modules
  externals: fs.readdirSync('node_modules').reduce((accumulator, module) => {
    const newAccumulator = accumulator;
    if (module !== '.bin') {
      newAccumulator[module] = `commonjs ${ module }`;
    }

    return newAccumulator;
  }, {}),
};

module.exports = config;

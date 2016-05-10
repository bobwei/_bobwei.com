'use strict';

let path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let dotenv = require('dotenv');
dotenv.config();

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        PARSE_APPLICATION_ID: JSON.stringify(process.env.PARSE_APPLICATION_ID),
        PARSE_JAVASCRIPT_KEY: JSON.stringify(process.env.PARSE_JAVASCRIPT_KEY),
        FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
        GOOGLE_ANALYTICS_ID: JSON.stringify(process.env.GOOGLE_ANALYTICS_ID)
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;

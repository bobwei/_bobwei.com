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
    'babel-polyfill',
    path.join(__dirname, '../src/index')
  ],
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
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
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;

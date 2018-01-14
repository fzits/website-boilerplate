/* vim:set sw=2: */
/* eslint indent: ['error', 2] */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const JS_SRC = './www/html/src/js';

module.exports = {
  entry: {
    sample: `${JS_SRC}/sample.js`
  },
  output: {
    path: path.resolve(__dirname, 'www/html/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      test: /\.js$/,
      parallel: true,
      sourceMap: process.env.NODE_ENV !== 'production',
      exclude: /node_modules/
    })
  ],
  devtool: 'source-map'
};

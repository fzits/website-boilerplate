/* vim:set sw=2: */
/* eslint indent: ['error', 2] */

const CleanWebpackPlugin = require('clean-webpack-plugin');

const midx = process.argv.indexOf('--mode');
const mode = (midx > -1) ? process.argv[midx + 1] : 'development';
const isProduction = (mode == 'production');

const SRC = './www/html/src/js';
const DIST = `${__dirname}/www/html/js`;

module.exports = {
  entry: {
    sample: `${SRC}/sample.js`
  },
  output: {
    path: DIST,
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
    new CleanWebpackPlugin([DIST])
  ],
  devtool: isProduction ? 'eval' : 'source-map'
};

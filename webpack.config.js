/* vim:set sw=2: */
/* eslint indent: ['error', 2] */

const JS_SRC = './www/html/src/js';

module.exports = {
  entry: {
    sample: `${JS_SRC}/sample.js`
  },
  output: {
    path: `${__dirname}/www/html/js`,
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
  devtool: 'source-map'
};

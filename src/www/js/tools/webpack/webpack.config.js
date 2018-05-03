const path = require('path');

module.exports = {
  mode: 'production',

  entry: ['babel-polyfill', './src/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.html$/,
        loader: 'mustache-loader'
      }
    ]
  }
};

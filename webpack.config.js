const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, './src'),
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/, use: {
          loader: 'babel-loader',
          options: {}
        }
      }
    ]
  }
}

module.exports = config;

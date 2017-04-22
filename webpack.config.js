const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, './src'),
  entry: './src/index.js',
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
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple todo app'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  }
}

module.exports = config;

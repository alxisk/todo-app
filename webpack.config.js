const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'env']
            }
          },
          {
            loader: 'eslint-loader',
            options: {

            }
          }
        ]
      }
    ]
  },

  devtool: 'cheap-module-inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple todo app',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
    overlay: {
      warnings: true
    }
  }
}

module.exports = config;

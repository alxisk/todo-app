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
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10000',
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  devtool: 'cheap-module-source-map',

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
    port: 8080
  }
}

module.exports = config;

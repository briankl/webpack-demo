const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    hello: './src/hello.js',
    world: './src/world.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  mode: 'production', // https://webpack.js.org/concepts/mode,
  optimization: {
    splitChunks: {
      chunks: 'all', // works if package is > 30 kb,
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      meta: { viewport: 'width=device-width, initial-scale=1' }
    }),
    new HtmlWebpackPlugin({
      title: 'Hello',
      chunks: ['hello', 'vendors_hello_world'],
      filename: 'hello.html',
      meta: { viewport: 'width=device-width, initial-scale=1' }
    }),
    new HtmlWebpackPlugin({
      title: 'World',
      chunks: ['world', 'vendors_hello_world'],
      filename: 'world.html',
      meta: { viewport: 'width=device-width, initial-scale=1' }
    })
  ]
};

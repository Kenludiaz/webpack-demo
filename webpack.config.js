const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',

 entry: {
   index: './src/index.js',
 },
 devtool: 'inline-source-map',
 devServer: {
  contentBase: path.resolve(__dirname, "dist")
 }, 
 plugins: [
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new HtmlWebpackPlugin({

    title: 'Caching',

  }),

],
   output: {
   filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/'
  }
};
const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader" }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.optimize.UglifyJsPlugin({ minimize: true })],
  watch: true
}
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.join(__dirname, 'assets'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      query: {
        transpileOnly: true,
      },
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg)/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new HotModuleReplacementPlugin(),
  ],
}

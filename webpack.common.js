const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const removePlugin = require('remove-files-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    style: '/src/style.css',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Odin Restaurant',
      template: 'src/index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    new removePlugin({
      after: {
        include: ["dist/style.js"],
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/images', to: 'images'},
        {from: 'src/fonts', to: 'fonts'}
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

}
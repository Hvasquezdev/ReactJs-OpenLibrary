const path = require('path');
const HTML = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTML({
      template: './src/index.html'
    })
  ]
}
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './index'
  ],
  output: {
    filename: 'webpack.js'
  }
}

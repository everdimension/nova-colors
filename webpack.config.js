const path = require('path')

const config = {
  entry: { showroom: './showroom/showroom' },
  output: {
    path: './showroom',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
    port: 3000,
    contentBase: path.resolve(__dirname, 'showroom'),
  },
}

module.exports = config

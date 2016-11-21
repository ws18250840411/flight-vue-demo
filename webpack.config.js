var path = require('path')

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname, // path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  }
}

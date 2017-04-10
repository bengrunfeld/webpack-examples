let path = require('path')
let CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin')

process.noDeprecation = true
// Added because -> https://github.com/webpack/loader-utils/issues/56

module.exports = {
  entry: {
    home: './src/home',
    blog: './src/blog',
    vendor: ['jquery', 'react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
     new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
  ]
}
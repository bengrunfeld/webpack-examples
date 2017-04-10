let path = require('path')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  }
}
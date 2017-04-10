const $ = require('jquery')
require('./style.scss')

module.exports = {
  addMessage: (msg) => {
    $('.target').text(msg)
  }
}
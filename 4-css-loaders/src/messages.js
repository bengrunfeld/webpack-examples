const $ = require('jquery')
require('../style.css')

module.exports = {
  addMessage: (msg) => {
    $('.target').text(msg)
  }
}
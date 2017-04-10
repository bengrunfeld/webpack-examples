const $ = require('jquery')

const addMessage = (msg) => {
  $('.target').text(msg)
}

addMessage('Transpiling with the Webpack Babel Loader')

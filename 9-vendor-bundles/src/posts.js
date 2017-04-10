const $ = require('jquery')
require('./style.scss')

module.exports = {
  addPost: (content) => {
    $('.posts').append(`
      <div class="blog-post">
        <p>${content}</p>
      </div>
    `)
  }
}
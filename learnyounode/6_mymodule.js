const fs = require('fs')
const path = require('path')

module.exports = function(directory, extname, callback) {
  fs.readdir(directory, (err, data) => {
    if(err) return callback(err);

    data = data.filter((filename) => {
      return path.extname(filename) === `.${extname}`
    })

    callback(null, data)
  })
}
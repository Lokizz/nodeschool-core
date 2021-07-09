// TODO　8. HTTP collect
// Perform an HTTP GET request to URL provided by the first cmd argument
// Collect all data from the server and then write two lines to the console
// 1st line should just be the number of characters, 2nd line should contain the complete String

const http = require('http')
const bl = require('bl')

http.get(process.argv[2], (res) => {
  res.pipe(bl((err, data) => {  // data would be Buffer object
    if(err) return console.error(err)
    // convert Buffer into string
    const contents = data.toString()
    console.log(contents.length)
    console.log(contents)
  }))
}).on('error', console.error)  // request on 'error' event


// todo: official solution
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
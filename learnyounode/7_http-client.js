// TODO 7. Http client
// Perform an HTTP GET request to a URL provided as the first cmd argument
// Output the String content of each 'data' event from response to a new line on the console

const http = require('http')
const { resolve } = require('path')

http.get(process.argv[2], (res) => {  // res as a Buffer object
  res.setEncoding('utf8')

  res.on('data', console.log)

  res.on('error', console.error)
})


// todo: official solution
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)  // request on 'error' event
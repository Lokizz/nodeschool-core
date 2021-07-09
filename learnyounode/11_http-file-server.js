// TODO 11. Http file server
// Write an HTTP server that servers the same text file for each request it receives
// Server should listen on the port provided by the first argument
// Location of the file will be provided as the second argument
// Must use the fs.createReadStream() method to stream the file contents to the response

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // Write the response header
  res.writeHead(200, {'Content-Type': 'text/plain'})

  // stream can pip the data from the src stream to the dst stream
  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(process.argv[2])


// todo: official solution
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' 
})

  fs.createReadStream(process.argv[3]).pipe(res)    
})

server.listen(Number(process.argv[2]))
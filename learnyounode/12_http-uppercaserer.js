// TODO 12. HTTP uppercaserer
// Write an HTTP server that receives only POST requests
// Covert incoming POST body characters to upper-case and return
// The server should listen on the port provided by the first argument

const http = require('http')
// third party package
const map = require('through2-map')

const server = http.createServer((req, res) => {
   if(req.method !== 'POST') return console.error('Pls request in POST method...\n')
  //  return res.end('Pls send a POST request\n')
   
  //  map creates a transform stream
  res.writeHead(200, {'Content-Type': 'text/plain'})
  req.pipe(map(chunk => {  // Buffer Object
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(process.argv[2])


// todo: official solution
'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
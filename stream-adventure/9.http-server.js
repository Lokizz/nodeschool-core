// * 9. HTTP Server
// ? Write an http server that uses a through stream to write back the request stream as upper-cased response data for POST request.
// ? Your http server should listen on the port given at process.argv[2]
// ! Streams aren't just for text files and stdin/stdout

const http = require('http')
const through = require('through2')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through(function(buf, _, next) {
      this.push(buf.toString().toUpperCase())
      next()
    })).pipe(res)
  } else {
    res.end('Pls send me a POST request')
  }
})

server.listen(process.argv[2])


// ? Official Solution
// const http = require('http')
// const through = require('through2')

// const server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     req.pipe(through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase())
//       next()
//     })).pipe(res)
//   } else res.end('send me a POST\n')
// })
// server.listen(parseInt(process.argv[2]))
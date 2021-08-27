// * 10. HTTP Client
// Send an HTTP POST request to (http://localhost:8099) and pipe process.stdin into it.
// Pipe the response stream to process.stdout.
// ! The `req` object that you get back from `request()` is a writable stream and the `res` object in the callback function is a readable stream.

const { request } = require('http')  // only import the `request` function

const options = { method: 'POST'}
// req object is a writable stream
const req = request('http://localhost:8099', options, (res) => {
  res.setEncoding = 'utf8'
  res.pipe(process.stdout)
})

process.stdin.pipe(req)

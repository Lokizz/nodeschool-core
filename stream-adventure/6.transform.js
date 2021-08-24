// * 6. Transform
// Convert data from `process.stdin` to upper-case data on `process.stdout` using the `through2` module

const through = require('through2')

// ? Create a through stream with a `write` and `end` function
const stream = through(write, end)

// ? The `write` function is called for every buffer of available input
function write (buffer, encoding, next) {
  // call `this.push()` to produce output data
  this.push(buffer.toString().toUpperCase())
  // call `next()` when ready to receive the next chunk
  next()
}

// ? The `end` function is called when there is no more data
function end (done) {
  // call `done()` to finish the output
  done()
}

// ! Make sure to pipe `process.stdin` into transform stream and pipe transform stream into `process.stdout`
process.stdin.pipe(stream).pipe(process.stdout)


// * Official Solution
const through = require('through2')

const tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})
process.stdin.pipe(tr).pipe(process.stdout)

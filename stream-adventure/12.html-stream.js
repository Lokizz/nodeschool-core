// * 12. HTML Stream
// ? Program will get some html written to stdin.
// ? Convert all the inner html to upper-case for elements with a class of "loud"
// ? Pipe all the html to stdout
// Can use `trumpet` and `through2` to solve.

// ? Solution 1
const trumpet = require('trumpet'),
      through = require('through2')

const tr = trumpet()

// Create a transform stream from a css selector
const loud = tr.select('.loud').createStream()

loud.pipe(through(function(buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)


// ? Official Solution
// const trumpet = require('trumpet')
// const through = require('through2')
// const tr = trumpet()

// const loud = tr.select('.loud').createStream()
// loud.pipe(through(function (buf, _, next) {
//   this.push(buf.toString().toUpperCase())
//   next()
// })).pipe(loud)

// process.stdin.pipe(tr).pipe(process.stdout)
// * 7. Lines
// Convert even-numbered lines to upper-case and odd-numbered lines to lower-case. Consider the first line to be odd-numbered.

// use the `split2` module to split input by newlines
const split2 = require('split2')
const through = require('through2')

// ? Solution 1 (with `split2` module)
// the first line ([0]) as a odd-numbered line
// let count = 1

// process.stdin
//   .pipe(split2())
//   .pipe(through(function(line, encoding, next) {
//     // ! each chunk now is a separate line!
//     this.push(
//       count % 2 === 0 ? line.toString().toUpperCase() + '\n' : line.toString().toLowerCase() + '\n'
//     )
//     count++
//     next()
//   }))
//   .pipe(process.stdout)

// ? Solution 2 (without `split2` module)
let lineCount = 0
const tr = through((chunk, encoding, next) => {
  tr.push(
    lineCount % 2 === 0
      ? chunk.toString().toLowerCase()
      : chunk.toString().toUpperCase()
  )
  lineCount++
  next()
})
process.stdin
  .pipe(tr)
  .pipe(process.stdout)


// ? Official Solution
// const through = require('through2')
// const split2 = require('split2')

// let lineCount = 0
// const tr = through(function (buf, _, next) {
//   const line = buf.toString()
//   this.push(lineCount % 2 === 0
//     ? line.toLowerCase() + '\n'
//     : line.toUpperCase() + '\n'
//   )
//   lineCount++
//   next()
// })
// process.stdin
//   .pipe(split2())
//   .pipe(tr)
//   .pipe(process.stdout)
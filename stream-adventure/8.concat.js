// * 8. Concat

// You will be given text on `process.stdin`, convert buffer to string and reverse it using the `concat-stream` module before writing it to `process.stdout`.
// ! Both `process.stdout` and `concat-stream` are writable streams, so they can't be piped together.

const concat = require('concat-stream')

process.stdin
  .pipe(concat(body => {  // concat all buffers and give the result in callback
    // const arr = Array.prototype.slice.call(body.toString())
    // console.log(arr.reverse().join(''))
    process.stdout.write(body.toString().split('').reverse().join(''))
  }))
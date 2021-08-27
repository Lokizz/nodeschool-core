// * 8. Concat

// You will be given text on `process.stdin`, convert buffer to string and reverse it using the `concat-stream` module before writing it to `process.stdout`.
// ! Both `process.stdout` and `concat-stream` are writable streams, so they can't be piped together.

const concat = require('concat-stream')

process.stdin
  .pipe(concat(body => {  // concat all buffers and give the result in callback
    process.stdout.write(body.toString().split('').reverse().join(''))
  }))
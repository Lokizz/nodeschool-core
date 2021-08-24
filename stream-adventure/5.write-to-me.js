// * 5. Writable Streams
// To create a custom `Writable` stream you must call the `new stream.Writable(options)` constructor and implement the `_write()` and/or `_writev()` method.
// ? _write method takes three arguments: chunk | encoding | callback

// * Challenge
// ? Implement a writable stream that writes in console writing: + the given chunk
// ? And pipe it to the process.stdin

const { Writable } = require('stream')

const myStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`writing: ${chunk.toString()}`)
    callback()
  }
})

process.stdin.pipe(myStream)
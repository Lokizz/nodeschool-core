// * 4. Read It (Implementing a Readable Stream)
// To implement a `Readable` stream, you need to construct an object, or inherit, from `stream.Readable` class and implement a `_read()` method in it.
// ! This `_read` method MUST NOT be called by application code directly. It should be called by the internal `Readable` class methods only.
// ? Reading modes: flowing | paused (can switch to each other mode)
// ? Consuming a Readable Stream
// `readable.pipe(writable)` | `readable.on('readable', ...)` | `readable.on('data', ...)`
// ? Adding data to stream: `push()` method

// * Challenge
// ? Implement a Readable stream, initiate a new stream instance from your implementation and pipe to `process.stdout`.
// ? Receive the content to add to stream as the first argument to your program

const { Readable } = require('stream')

// Init a Readable stream instance
const myStream = new Readable({
  read() {}
})

// Adding data to stream
myStream.push(process.argv[2])

// Consuming a Readable Stream
myStream.pipe(process.stdout)
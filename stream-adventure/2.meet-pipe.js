// * 2. Meet Pipe
// Streams can consume data as it is loaded or produced, chunk by chunk (or piece by piece), instead of getting it all into memory to start consuming it.
// Four types of streams: Readable/Writable/Duplex/Transform
// ! The pipe method allows you to connect the output of the readable stream as the input of the writable stream
// * Challenge
// ? Get a file as the first argument to your program (process.argv[2])
// ? Use fs.createReadStream() to pipe the given file to process.stdout.

const fs = require('fs')

// fs.createReadStream takes a file as an argument and returns a readable stream, which you can call .pipe() on.
fs.createReadStream(process.argv[2]).pipe(process.stdout)
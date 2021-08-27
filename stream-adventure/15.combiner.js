// * 15. Combiner
// ! Not familiar
// ? Create a module in a new file named combiner.js, it should return a readable/writable stream using the `stream-combiner` module
// ? Your stream will be written a newline-separated JSON list of science fiction genres and books.
// ? Your program should generate a newline-separated list of JSON lines of genres, each with a `"book"` array containing all the books in that genre.

const combine = require('stream-combiner')
const through = require('through2')
const split2 = require('split2')
const zlib = require('zlib')

module.exports = function () {
  const grouper = through(write, end)
  let current

  function write (line, _, next) {
    if (line.length === 0) return next()
    const row = JSON.parse(line)

    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      current = { name: row.name, books: [] }
    } else if (row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }
  function end (next) {
    if (current) {
      this.push(JSON.stringify(current) + '\n')
    }
    next()
  }

  return combine(split2(), grouper, zlib.createGzip())
}

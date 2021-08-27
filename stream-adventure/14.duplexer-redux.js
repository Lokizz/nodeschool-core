// TODO 14. Duplexer Redux
// ! Not familiar
// ? You will be given a readable stream, `counter`, as the first arguments to your exported function
// ? Return a duplex stream with the `counter` on the readable side. You will be written objects with a 2-character `country` filed as input
// ? Create an object to track the number of occurrences of each unique country code
// ? Once the input ends, call `counter.setCounts()` with your counts object

const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function(counter) {
  const counts = {}
  const input = through(write, end)
  // return a duplex stream to count countries on the writable side
  return duplexer({ objectMode: true }, input, counter)
  // and pass through `counter` on the readable side
  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    counter.setCounts(counts)
    done()
  }
}

// * 17. Secretz
// ! Not familiar
// ? An encrypted, gzipped  tar file will be piped in on process.stdin
// ? For each file in the tar input, print a hex-encoded md5 hash of the file contents followed by a single space followed by the file path, then a newline
// ? Will receive: (pass these args directly through to `crypto.createDecipheriv()`)
/*
process.argv[2]: algorithm name
process.argv[3]: cipher key
process.argv[4]: cipher initialization vector
*/

const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')

const parser = new tar.Parse()
parser.on('entry', function (e) {
  if (e.type !== 'File') return e.resume()

  const h = crypto.createHash('md5', { encoding: 'hex' })
  e.pipe(h).pipe(concat(function (hash) {
    console.log(hash + ' ' + e.path)
  }))
})

const cipher = process.argv[2]
const key = process.argv[3]
const iv = process.argv[4]
process.stdin
  .pipe(crypto.createDecipheriv(cipher, key, iv))
  .pipe(parser)
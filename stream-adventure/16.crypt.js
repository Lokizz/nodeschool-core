// * 16. Crypt
// ? Will be given a passphrase on `process.argv[2]`, an initialization value on `process.argv[3]` and 'aes256' encrypted data will be written to stdin
// ? Simply decrypt the data and stream the result to process.stdout

const crypto = require('crypto')  
const stream = crypto.createDecipheriv('aes256', process.argv[2], process.argv[3])  
process.stdin.pipe(stream).pipe(process.stdout)  


// ? Official Solution
const crypto = require('crypto')

process.stdin
  .pipe(crypto.createDecipheriv('aes256', process.argv[2], process.argv[3]))
  .pipe(process.stdout)
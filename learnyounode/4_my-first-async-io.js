// TODO 4. my first async io
// use a single async filesystem operation to read a file and print the number of newlines
// the full path to the file as the first cmd argument

const fs = require('fs');

// readFile() needs to collect the value from a callback function
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if(err) return console.error(err);

  console.log(data.split('\n').length - 1);
})


// todo: official solution
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be 
used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
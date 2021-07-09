// TODO 5. filtered ls
// prints a list of files in a given directory, filtered by the extension of the lines.
// a directory name as the first argument, and a file extension to filter by as the second argument

const fs = require('fs');
const path = require('path');

// fs.readdir() takes a pathname as its first argument and a callback as its second
fs.readdir(process.argv[2], function filterFiles(err, list) {  // list is an array of filename strings
  if(err) return console.error(err);
  
  list.filter((filename) => {
    return path.extname(filename) === `.${process.argv[3]}`;
  }).forEach(filename => {
    console.log(filename);
  })
})


// todo: official solution
// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
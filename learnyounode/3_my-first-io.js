// TODO 3. my first io
// Use a single sync filesystem operation to read a file and print the number of newlines
// The full path to the file to read will be provided as the first cmd argument

const fs = require('fs');

// second argument to readFileSync will make get a string directly
const contents = fs.readFileSync(process.argv[2], 'utf8');
console.log(contents.split('\n').length - 1);


// todo: official solution
'use strict'
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])    
// const lines = contents.toString().split('\n').length 
// - 1
// console.log(lines)

// // note you can avoid the .toString() by passing 'utf8' as the
// // second argument to readFileSync, then you'll get a String!
// //
// // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
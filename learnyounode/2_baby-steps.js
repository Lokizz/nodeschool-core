// TODO 2. print the sum of numbers from cmd line arguments
let result = 0;

process.argv.slice(2).forEach(function sum(num) {
  // Number() to convert the string to number
  result += Number(num);
})

console.log(result);


// todo: official solution
'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {      
  result += Number(process.argv[i])
}

console.log(result)
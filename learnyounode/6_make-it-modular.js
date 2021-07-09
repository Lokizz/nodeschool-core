// TODO 6. Make it modular
// Print a list of files in a given directory, filtered by the extension of the files.
// Must write a module file to do most of the work -- export a single function that takes three arguments: the directory name, the filename extension and callback function
// The callback function must be called using the idiomatic node(err, data) convention -- stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data, which will be your filtered list of files as an Array.
// Must not print directly to the console from your module file, only from your original program.

// mind the pathname
const myModule = require('./6_mymodule.js')

myModule(process.argv[2], process.argv[3], outputData)

function outputData() {
  if(arguments.length === 2) {
    arguments[1].forEach((item)=>{
      console.log(item);
    })
  } else {
    console.log(arguments[0]);
  }
}
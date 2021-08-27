// TODO 13. Duplexer
// ! Not familiar
// ? Write a program that exports a function that spawns a progress from a `cmd` string and an `args` array
// ? Return a single duplex stream joining together the stdin and stdout of the spawned process.

// ! child_process.spawn 使用指定的命令行参数创建新进程
const { spawn } = require('child_process')
const duplexer = require('duplexer2')

// ? Solution 1 (with duplexer2 module)
module.exports = function(cmd, args) {
  // spawn the process and return a single stream
  const spawnObj = spawn(cmd, args)
  // joining together the stdin and stdout here
  return duplexer(spawnObj.stdin, spawnObj.stdout)
}
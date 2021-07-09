// TODO 10. Time server
// Write a TCP time server that listens on the port provided by the first argument
// For each connection you must write the current date & 24 hour time in the format: "YYYY-MM-DD hh:mm", followed by a newline character
// Month, day, hour and min must bt zero-filled to 2 integers.
// After sending the string, close the connection

const net = require('net')

const server = net.createServer((socket) => {
  // socket handling logic
  socket.on('err', console.error)

  socket.end(`${timeFormat(new Date())}\n`)
})

// Listen for the specified port
server.listen(process.argv[2]);

function zeroFill(time) {
  return time < 10 ? '0' + time : '' + time
  // simple one
  // return (time < 10 ? '0' : '') + time
}

function timeFormat(dateObj) {
  return `${dateObj.getFullYear()}-${zeroFill(dateObj.getMonth()+1)}-${zeroFill(dateObj.getDate())} ${zeroFill(dateObj.getHours())}:${zeroFill(dateObj.getMinutes())}`
}


// todo: official solution
'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) { 
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
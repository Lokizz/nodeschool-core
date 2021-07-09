// TODO 13. HTTP json api server
// Write an http server that serves JSON data
// When it receives a GET request to the path '/api/parsetime'
// Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value
// exp. /api/parsetime?iso=2013-08-10T12:10:15.474Z
// The JSON response should contain only 'hour', 'minute', 'second' properties
// Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds
// The server should listen on the port provided by the first argument

const http = require('http')
const { parse } = require('path')
const url  = require('url')

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, 'http://127.0.0.1')

  const time = new Date(reqUrl.searchParams.get('iso'))
  // res.writeHead(200, {'content-type': 'application/json'})

  // if(reqUrl.pathname === '/api/parsetime') return res.end(parseTime(date))
  // if(reqUrl.pathname === '/api/unixtime') return res.end(unixTime(date))

  let result
  if(/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time)
  } else if(/^\/api\/unixtime/.test(req.url)) {
    result = unixTime(time)
  }

  if(result) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(result)
  } else {
    res.writeHead(400)
    res.end()
  }
})

server.listen(process.argv[2])

function parseTime(dateObj) {
  return JSON.stringify({
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes(),
    second: dateObj.getSeconds()
  })
}

function unixTime(dateObj) {
  return JSON.stringify({
    unixtime: dateObj.getTime()
  })
}


// todo: official solution
// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {    
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
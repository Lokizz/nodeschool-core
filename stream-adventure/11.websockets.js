// * 11. Websockets
// ? Write a websocket client that uses `us` module
// ? Generate a stream on top of the web socket client
// ? Write the string "hello\n" to the stream and pipe it to `process.stdout`.

const WebSocket = require('ws')

// Open a stream with `ws`
const ws = new WebSocket('ws:localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)

ws.on('open', function open() {
  ws.send('hello\n')
})

stream.pipe(process.stdout)

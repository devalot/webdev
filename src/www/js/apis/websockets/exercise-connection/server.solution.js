const url = require('url')
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

const heartbeat = (ws) => {
  ws.isAlive = true;
}

wss.on('connection', (ws, request) => {
  const { webSocketToken } = url.parse(request.url, true).query
  ws.isAlive = true
  ws.on('message', (data) => {
    switch (data.type) {
      case 'pong': {
        heartbeat(ws)
      }
    }
  })
})

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    console.log('sending ping')
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.send(JSON.stringify({ type: 'ping' }))
  });
}, 3000);

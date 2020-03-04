const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

let recentMessages = []

wss.on('connection', (ws) => {
  console.log('yay we got a ws connection')

  recentMessages.forEach((message) => {
    ws.send(`Someone says: ${message}`)
  })

  ws.on('message', (data) => {
    recentMessages = [data, ...recentMessages].slice(0, 5)
    wss.clients.forEach((client) => {
      if (ws !== client && client.readyState === WebSocket.OPEN) {
        client.send(`Someone says: ${data}`)
      }
    })
  })
})

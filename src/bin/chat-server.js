const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

wss.on('connection', ws => {
  console.log('new connection')

  ws.on('close', () => { console.log('connection closed') })

  ws.on('message', (message) => {
    console.log('Server received: %s', message)

    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })

  ws.send(JSON.stringify({ user: 'root', message: 'Welcome!' }))
})

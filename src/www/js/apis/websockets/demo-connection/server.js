const url = require('url')

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

function sendToClients(ws, message) {
  wss.clients.forEach(client => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

wss.on('connection', (ws, req) => {
  const user = url.parse(req.url, true).query.user

  sendToClients(ws, `${user} joined.`)

  ws.on('close', () => {
    sendToClients(ws, `${user} disconnected.`)
  })
  ws.on('message', message => {
    sendToClients(ws, message)
  })

  ws.send(
    JSON.stringify({
      user: 'root',
      message: '---Welcome---',
    }),
  )
})

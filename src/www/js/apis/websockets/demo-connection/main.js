let log = (data) => {
  $('#log').prepend($('<li></li>').text(data))
}

const setupWebSocket = (ws, user) => {
  ws.onopen = () => {
    log(`${user} connected.`)
  }

  ws.onclose = () => {
    log(`${user} disconnected.`)
  }

  ws.onmessage = (e) => {
    log(e.data)
  }
}

$(function () {
  let ws
  let user

  $('#new-connection').submit((e) => {
    e.preventDefault()
    const $form = $(e.target)
    user = $form.find('input').val()
    ws = new WebSocket(`ws://localhost:3030/?user=${user}`)
    $form.hide()
    setupWebSocket(ws, user)
  })

  $('#connection').submit((e) => {
    e.preventDefault()
    ws.close()
  })
})

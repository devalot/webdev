$(function () {
  let log = function (data) {
    $('#chat').prepend($('<li></li>').text(data))
  }

  const ws = new WebSocket(`ws://localhost:3030/`)

  let pingTimeout

  const heartbeat = ({ data }) => {
    console.log('heartbeat')
    clearTimeout(pingTimeout)
    setTimeout(() => {
      console.log('Stopped receiving heartbeats, terminating')
      ws.terminate()
    }, 4000)
  }

  ws.onopen = heartbeat
  ws.onmessage = heartbeat
  ws.onclose = () => {
    clear(pingTimeout)
  }
})

$(function() {
  let log = function(data) {
    $("#chat").prepend($("<li></li>").text(data));
  };

  const ws = new WebSocket('ws://localhost:3030')

  let pingTimeout

  const heartbeat = () => {
    // TODO: clear the existing pingTimeout
    // TODO: set a new timeout to terminate the connection after an interval and store it in pingTimeout
  }

  ws.on('open', heartbeat)
  ws.on('ping', heartbeat)
  ws.on('close', () => {
    clear(pingTimeout)
  })
});

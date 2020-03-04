$(function() {
  let log = function(data) {
    $("#log").prepend($("<li></li>").text(data));
  };

  // <<: new
  let ws = new WebSocket("ws://localhost:3000/");
  // :>>

  // <<: onopen
  ws.onopen = function() {
    log("connected to WebSocket server");
  };
  // :>>

  ws.onclose = function() {
    log("connection to WebSocket server closed");
  };

  ws.onerror = function() {
    log("a WebSocket error occurred");
  };

  // <<: onmessage
  ws.onmessage = function(e) {
    log("incoming message: " + e.data);
  };
  // :>>

  $("#ping").click(function() {
    log("sending PING to server");

    // <<: send
    ws.send("PING");
    // :>>
  });

  $('#disconnect').click(() => {
    ws.close()
  })
});

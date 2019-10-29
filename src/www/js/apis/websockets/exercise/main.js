$(function() {
  let log = function(data) {
    $("#chat").prepend($("<li></li>").text(data));
  };

  // TODO: create a websocket connection

  // TODO: when user submits the form:
  //    1. log the input to this window: "You: ..."
  //    2. clear the input

  // TODO: when user clicks "Send", send message to WebSocket server

  // TODO: go to `server.js` and continue there

  // TODO: when message received from server, log it to this window
});

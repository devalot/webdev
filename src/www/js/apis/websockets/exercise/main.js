$(function() {
  let log = function(data) {
    $("#chat").prepend($("<li></li>").text(data));
  };

  const ws = new WebSocket("ws://localhost:3030/");

  ws.onmessage = (e) => {
    log(e.data);
  };

  $("form").submit(() => {
    let $input = $('input')
    const text = $input.val()
    $input.val('')
    log(`You: ${text}`)
    ws.send(text)
  });
});

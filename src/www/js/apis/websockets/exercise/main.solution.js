$(function() {
  let log = function(data) {
    $("#chat").prepend($("<li></li>").text(data));
  };

  const ws = new WebSocket('ws://localhost:3030')

  ws.onopen = () => {
    console.log('yay we connected')
  }

  $('form').submit((e) => {
    e.preventDefault()
    let $input = $(e.target).find('input')
    const text = $input.val()
    log(`You: ${text}`)
    $input.val('')
    ws.send(text)
  })

  ws.onmessage = ({ data }) => {
    log(data)
  }
});

$(function () {
  let log = function (data) {
    $('#chat').prepend($('<li></li>').text(data))
  }

  const ws = new WebSocket('ws://localhost:3030')

  ws.onopen = () => {
    console.log('yay we connected')
  }

  document.querySelector('form')
    .addEventListener('submit', (e) => {
      console.log('yo')
      e.preventDefault()
      const input = e.target
        .querySelector('input')
      const text = input.value
      log(`You: ${text}`)
      input.value = ''
      ws.send(text)
    })

  ws.onmessage = ({ data }) => {
    log(data)
  }
})

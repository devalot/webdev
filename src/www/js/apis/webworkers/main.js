const worker = new Worker('worker.js')

document.querySelector('#go')
  .addEventListener('click', () => {
    worker.postMessage('Hello world')
  })

worker.addEventListener('message', ({ data }) => {
  console.log('Uppercased message:', data)
})

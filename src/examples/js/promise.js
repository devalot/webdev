// <<: without
$.getJSON('/a', (data_a) => {
  $.getJSON('/b/' + data_a.id, (data_b) => {
    $.getJSON('/c/' + data_b.id, (data_c) => {
      console.log('Got C: ', data_c)
    }, () => {
      console.error('Call failed')
    })
  }, () => {
    console.error('Call failed')
  })
}, () => {
  console.error('Call failed')
})
// :>>

// <<: with
$.getJSON('/a')
  .then((data) => {
    return $.getJSON('/b/' + data.id)
  })
  .then((data) => {
    return $.getJSON('/c/' + data.id)
  })
  .then((data) => {
    console.log('Got C: ', data)
  })
  .catch((message) => {
    console.error('Something failed:', message)
  })
// :>>

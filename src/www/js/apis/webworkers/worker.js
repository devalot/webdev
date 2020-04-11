console.log('worker was loaded')

onmessage = ({ data }) => {
  const capitalizedString = data.toUpperCase()
  postMessage(capitalizedString)
}

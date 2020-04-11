
console.log('this is an mock file')
console.log('I will be used instead of the real file')

let response = { data: [1, 2, 3] }

export const get = () => {
  console.log('response', response)
  return response
}

export const _setGetResponse = (data) => {
  console.log('I am going to change some state', data)
  response = data
}

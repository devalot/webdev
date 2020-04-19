const bar = () => {
  // <<: text
  const message = document.createElement('p')
  message.appendChild(document.createTextNode('Hello'))
  document.body.appendChild(message)
  // :>>
}

const addImage = () => {
  const image = document.createElement('img')
  image.src = `https://www.placecage.com/200/30${getRandomInt(9)}`
  document.getElementById('root').appendChild(image)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const foo = () => {
  // <<: img
  const image = document.createElement('img')
  image.src = 'https://www.placecage.com/200/300'
  document.getElementById('root').appendChild(image)
  // :>>
}

const addList = () => {
  const list = document.createElement('ul')

  const todo1 = document.createElement('li')
  todo1.appendChild(document.createTextNode('Learn DOM'))

  const todo2 = document.createElement('li')
  todo2.appendChild(document.createTextNode('Profit'))

  list.appendChild(todo1)
  list.appendChild(todo2)

  document.getElementById('root').appendChild(list)
}

// for slides, don't use in exercise
const shortList = () => {
  // <<: list
  const list = document.createElement('ul')

  const todo1 = document.createElement('li')
  todo1.appendChild(document.createTextNode('Learn DOM'))

  list.appendChild(todo1)

  document.getElementById('root').appendChild(list)
  // :>>
}

// <<: re-append
const moveToEnd = () => {
  const list = document.getElementsByTagName('ul')[0]
  const todo = list.children[0]
  list.appendChild(todo)
}
// :>>

const setHtml = () => {
  // <<: inner-html
  document.body.innerHTML = '' +
    '<ul>' +
    '  <li>Learn DOM</li>' +
    '  <li>Practice innerHMTL</li>' +
    '</ul>'

  console.log(document.body.innerHTML)
  // :>>
}

const setText = () => {
  // <<: inner-text
  const title = document.getElementById('title')
  console.log(title.innerText) // 'Welcome'
  title.innerText = 'Goodbye'
  console.log(title.innerText) // 'Goodbye'
  // :>>
}

const formInput = () => {
  // <<: form-value
  const input = document.createElement('input')
  input.value = 'I love tea'
  console.log(input.value) // 'I love tea'
  document.body.appendChild(input)
  // :>>
}

const toggleVisibility = () => {
  // <<: class-toggle
  const title = document.getElementById('title')
  title.classList.contains('hidden') // false
  title.classList.toggle('hidden')
  title.classList.contains('hidden') // true
  title.classList.toggle('hidden')
  title.classList.contains('hidden') // false
  // :>> class
}

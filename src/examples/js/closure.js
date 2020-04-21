// <<: private
const makeCounter = (startingValue) => {
  let n = startingValue

  return () => n += 1
}
// :>>

// <<: simple
const init = () => {
  const name = 'Andrew'
  return () => {
    console.log(name)
  }
}

// :>>

const specialization = () => {
  // <<: specialization
  // General
  const prop = (key) => (obj) => obj[key]

  // Specialized
  const getId = prop('id')
  const getName = prop('name')

  const person = { id: 1, name: 'Andrew' }
  getId(person) // 1
  getName(person) // 'Andrew'
  // :>>

  // <<: specialization-2
  const users = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Cynthia' },
  ]
  const pluck = (key) => (
    (xs) => (
      xs.map(prop(key))
    )
  )
  // :>>
}

// <<: destructure
const obj = { a: 1, b: 2, c: 3, d: 4 }
const { a, b } = obj

console.log(a) // 1
console.log(b) // 2
// :>>

// <<: destructure-parameter
const getId = ({ id }) => id

const person = { id: 42, name: 'Andrew' }
getId(person) // 42
// :>>

// <<: destructure-parameter-2
const getName = ({ name }, { upcase } = {}) => (
  upcase ? name.toUpperCase() : name
)

const person = { id: 42, name: 'Andrew' }
getName(person) // 'Andrew'
getName(person, { upcase: true }) // 'ANDREW'
// :>>

// <<: destructure-rename
const myObj = { foo: 42 }
const { foo: bar } = myObj

console.log(bar) // 42
// :>>

// <<: rest
const obj = { a: 1, b: 2, c: 3, d: 4 }
const { a, b, ...rest } = obj

console.log(a) // 1
console.log(b) // 2
console.log(rest) // { c: 3, d: 4 }
// :>>

// <<: spread
const z = { c: 3 }
const x = { a: 1, b: 2, ...z }

console.log(x) // { a: 1, b: 2, c: 3 }
// :>>

// <<: spread-shallow
const z = { a: 1, b: [] }
const copy = { ...z }

copy.a = 42
copy.b.push('foo')

z.a // ?
z.b // ?
// :>>

// <<: spread-shallow-answer
const z = { a: 1, b: [] }
const copy = { ...z }

copy.a = 42
copy.b.push('foo')

z.a // 1
z.b // ['foo']
// :>>

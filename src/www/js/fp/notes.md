

```js
import * as R from 'ramda'

const add5ToSomething = (x) => x + 5
const add5ToSomethingR = R.add(5)

const teamA = [0, 3, 6, 7, 8]

teamA.map(value => value + 1)

// const incrementAllValuesByOne = (xs) => (
//   xs.map(value => value + 1)
// )

// const incrementAllValuesByOne = (xs) => (
//   xs.map(R.add(1))
// )

const incrementAllValuesByOne = (
  R.map(R.add(1))
)

console.log(
  incrementAllValuesByOne(teamA),
)

const obj = {
  a: 42,
  b: {
    c: {
      d: 'hello'
    }
  }
}

// const objChanged = {
//   ...obj,
//   b: {
//     ...obj.b,
//     c: {
//       ...obj.b.c,
//       d: 'goodbye'
//     }
//   }
// }
// objChanged.a = 1
// objChanged.b.c.d = 'goodbye'

// console.log(obj)
// console.log(objChanged)


console.log(
  R.dissocPath(
    ['b', 'c', 'd'],
    obj
  )
)

console.log(obj)

const todos = [
  { id: 1, text: 'Learn FP', done: false },
  { id: 2, text: 'Learn JS', done: false },
  { id: 3, text: 'Celebrate 🎉', done: false },
]

const markTodoCompleted = R.assoc('done', true)

const markAllCompleted = R.map(
  markTodoCompleted
)

console.log(
  markAllCompleted(todos)
)


const words = [
  'cat',
  'dog',
  'game',
  'bear',
  'apple',
  'spaghetti',
]

// const hasFourLetters = x => x.length === 4
// const hasFourLetters = x => R.length(x) === 4
// const hasFourLetters = x => R.equals(4, R.length(x))
const hasFourLetters = R.compose(R.equals(4), R.length)

const findsFourLetterWords = R.filter(
  hasFourLetters
)

console.log(
  findsFourLetterWords(words)
)

```

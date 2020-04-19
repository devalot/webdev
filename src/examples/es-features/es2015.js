// <<: rest
const remainder = (first, ...args) => args.length
// :>>

console.log('remainder(1) //', remainder(1))
console.log('remainder(1, 2) //', remainder(1, 2))
console.log('remainder(1, 2, 3, 4) //', remainder(1, 2, 3, 4))

// <<: spread
const add = (a, b) => a + b

const nums = [1, 2]
add(nums) // bad times: '1,2undefined'
add(...nums) // 3
// :>>

// <<: spread-copy
const arr1 = [1, 2]
const arr2 = [3, 4]
const combined = [...arr2, ...arr1] // [3, 4, 1, 2]
// :>>

// <<: assign
const o1 = { a: 1, b: 2 }
const o2 = {}

Object.assign(o2, o1) // MUTATES
console.log(o2) // { a: 1, b: 2 }
// :>>

// <<: for-of
const primes = [2, 3, 5, 7]

for (const num of primes) {
  console.log(num)
}
// :>>

// <<: sum
let a = [1, 2, 3];

// Sum numbers in `a'.
let sum = a.reduce(function(acc, elm) {
  // 1. `acc' is the accumulator
  // 2. `elm' is the current element
  // 3. You must return a new accumulator
  return acc + elm;
}, 0);

sum; // 6
// :>>

console.assert(sum === 6);

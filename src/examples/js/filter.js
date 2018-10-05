// <<: simple
let numbers = [10, 7, 23, 42, 95];

let even = numbers.filter(function(n) {
  return n % 2 === 0;
});

even;           // [10, 42]
even.length;    // 2
numbers.length; // 5
// :>>

console.assert(even.length === 2);
console.assert(even[0] === 10);
console.assert(even[1] === 42);

// <<: homemade
function filter(array, func) {
  return array.reduce(function(acc, elm) {
    if (func(elm)) acc.push(elm);
    return acc;
  }, []);
}

console.log(filter([1, 2, 3], function(e){
  return e > 1;
}));
// :>>

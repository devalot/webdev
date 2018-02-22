"use strict";

/******************************************************************************/
// <<: Calling a function.
function sum(a, b, c, d) {
  return a + b + c + d;
}

var values = [1, 2, 3, 4],
    result = sum.apply(undefined, values);

console.log(result); // 10
// :>>

/******************************************************************************/
// <<: In arguments.
function sum2(x) {
  return x + (arguments.length <= 1 ? undefined : arguments[1]);
}

console.log(sum2(1, 2, 3, 4)); // 3
// :>>
// <<: array
let firstPrimes = function() {
  return [2, 3, 5, 7];
};

let x, y, rest;
[x, y, ...rest] = firstPrimes();
// :>>

console.log("console.log(x); //", x);
console.log("console.log(y); //", y);
console.log("console.log(rest); //", rest);

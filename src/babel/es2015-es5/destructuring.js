"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// <<: array
var firstPrimes = function firstPrimes() {
  return [2, 3, 5, 7];
};

var x = void 0,
    y = void 0,
    rest = void 0;

// :>>

var _firstPrimes = firstPrimes();

var _firstPrimes2 = _toArray(_firstPrimes);

x = _firstPrimes2[0];
y = _firstPrimes2[1];
rest = _firstPrimes2.slice(2);
console.log("console.log(x); //", x);
console.log("console.log(y); //", y);
console.log("console.log(rest); //", rest);
"use strict";

// <<: default
var add = function add(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return x + y;
};
// :>>

console.log("add(2); //", add(2));

// <<: rest
var last = function last(x, y) {
  return arguments.length <= 2 ? 0 : arguments.length - 2;
};
// :>>

console.log("last(1, 2, 3, 4); //", last(1, 2, 3, 4));

// <<: spread
var max = function max(x, y) {
  return x > y ? x : y;
};

var ns = [42, 99];
// :>>

console.log("max(...ns); //", max.apply(undefined, ns));
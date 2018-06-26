// <<: default
let add = function(x, y=1) {
  return x + y;
};
// :>>

console.log("add(2); //", add(2));

// <<: rest
let last = function(x, y, ...args) {
  return args.length;
};
// :>>

console.log("last(1, 2, 3, 4); //", last(1, 2, 3, 4));

// <<: spread
let max = function(x, y) {
  return x > y ? x : y;
};

let ns = [42, 99];
// :>>

console.log("max(...ns); //", max(...ns));

// <<: bad
let f = function(a, b) {
  return
    a + b;
};
// :>>

console.log(f(1, 2));

// <<: rewrite
let f = function(a, b) {
  return;
  a + b;
};
// :>>

// <<: good
let f = function(a, b) {
  return a +
    b;
};
// :>>

console.log(f(1, 2));

// <<: bad
var f = function(a, b) {
  return
    a + b;
};
// :>>

console.log(f(1, 2));

// <<: rewrite
var f = function(a, b) {
  return;
  a + b;
};
// :>>

// <<: good
var f = function(a, b) {
  return a +
    b;
};
// :>>

console.log(f(1, 2));

let sum = add(1, 2); // works
console.log(sum);

let diff = sub(1, 2); // does not work.
console.log(diff);

function add (a, b) {
  return a + b;
}

var sub = function(a, b) {
  return b - a;
};

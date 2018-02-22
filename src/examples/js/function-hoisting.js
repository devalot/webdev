var sum = add(1, 2);
console.log(sum);

var diff = sub(1, 2);
console.log(diff);

function add (a, b) {
  return a + b;
}

var sub = function(a, b) {
  return b - a;
};

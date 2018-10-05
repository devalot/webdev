// <<: foo
var a = 5;

function foo(b) {
  var c = 10;
  d = 15;

  if (d === c) {
    var e = "error: wrong number";
    console.error(e);
  }

  return function(f) {
    var c = 2;
    return f + c + b;
  };
}
// :>>

var x = foo(1)(2);
console.assert(x === 5);

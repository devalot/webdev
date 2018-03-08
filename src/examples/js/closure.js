function outer() {
  var name = "Grim";

  var inner = function() {
    console.log(name);
  };

  return inner;
}

// Invoke `outer' and get a function back:
var f = outer();

// Sometime in the future...
f();

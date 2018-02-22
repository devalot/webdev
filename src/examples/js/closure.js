function a() {
  var name = "Grim";

  var b = function() {
    console.log(name);
  };

  return b;
}

// Invoke `a' and get a function back:
var innerFunction = a();

// Sometime in the future...
innerFunction();

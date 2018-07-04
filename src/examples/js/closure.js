var makeCounter = function(startingValue) {
  var n = startingValue;

  return function() {
    return n += 1;
  };
};

var counter = makeCounter(0);
counter(); // 1
counter(); // 2

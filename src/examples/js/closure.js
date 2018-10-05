let makeCounter = function(startingValue) {
  let n = startingValue;

  return function() {
    return n += 1;
  };
};

let counter = makeCounter(0);
counter(); // 1
counter(); // 2

var forEach = function(array, callback) {
  for (var i=0; i<array.length; ++i) {
    callback(array[i], i, array);
  }
};

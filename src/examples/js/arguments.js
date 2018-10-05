let foo = function() {
  let args = Array.prototype.slice.call(arguments);
  console.log(args);
};

// jshint esversion: 6

Function.prototype.curry = function() {
  let f = this;

  // Curried function wrapping around `f':
  return function() {
    let args = [];
    let this_ = this;

    // Function that checks for saturation:
    let wrapper = function() {
      args = args.concat(Array.from(arguments));

      if (args.length >= f.length) {
        return f.apply(this_, args);
      } else {
        return wrapper;
      }
    };

    return wrapper.apply(this, arguments);
  };
};

// jshint esversion: 6

Function.prototype.curry = function() {
  let f = this;
  let args = [];
  let this_ = null;

  let wrapper = function() {
    args = args.concat(Array.from(arguments));
    this_ = this_ || this;

    if (args.length >= f.length) {
      return f.apply(this_, args);
    } else {
      return wrapper;
    }
  };

  return wrapper;
};

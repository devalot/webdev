Function.prototype.curry = function() {
  var func = this;
  var args = [];
  var receiver;

  var curried = function() {
    if (!receiver) receiver = this;
    args = args.concat(Array.from(arguments));

    if (args.length >= func.length) {
      return func.apply(receiver, args);
    } else {
      return curried;
    }
  };

  return curried;
};

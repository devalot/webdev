(function() {

  /******************************************************************************/
  // Using the `arguments' property.
  let f = function() {
    console.log(arguments, arguments.pop);

    let args = Array.prototype.slice.call(arguments);
    console.log(args, args.pop);
  };

  // Invoke `f' with a bunch of arguments:
  f("Hello", "World", 1, 2, 3, "A", "B", "C");

})();

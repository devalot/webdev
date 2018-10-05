/******************************************************************************/
// <<: example
let add = function(x, y) {
  return x + y;
};

let add10 = add.bind(undefined, 10);

console.log(add10(2));
// :>>

/******************************************************************************/
// <<: no-bind
Function.prototype.partial = function() {
  let args = Array.prototype.slice.call(arguments),
      func = this;

  let partial = function() {
    let args2 = Array.prototype.slice.call(arguments);
    return func.apply(this, args.concat(args2));
  };

  return partial;
};
// :>>

/******************************************************************************/
// <<: working
let obj = {
  color: "red",
  add: function(x, y) {
    console.log("adding " + x + " and " + y);
    console.log("my color is: ", this.color);
    return x + y;
  },
};

obj.add10 = obj.add.partial(10);
obj.add10(2); // Should log "10 + 2" then "red".
// :>>

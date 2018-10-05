/******************************************************************************/
// <<: simple
let x = {color: "red"};
let f = function() {console.log(this.color);};

x.f = f;

let g = f.bind(x);
let h = f.bind(x, 1, 2, 3);

g(); // Same as x.f();
h(); // Same as x.f(1, 2, 3);
// :>>

/******************************************************************************/
// <<: callback
// Call `x.f()` in one second:
setTimeout(f.bind(x), 1000);
// :>>

Function.prototype.myBind = function() {
  let self = this;
  let args = Array.prototype.slice.call(arguments);
  let lockedThis = args.shift();

  return function() {
    let args2 = Array.prototype.slice.call(arguments);
    self.apply(lockedThis, args.concat(args2));
  };
};

let func = function() {console.log(this);};
let wrap = f.myBind("hello", 1);
wrap(2); // func.call("hello", 1, 2);

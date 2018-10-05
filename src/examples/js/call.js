let x = {color: "red"};
let f = function() {console.log(this.color);};

f.call(x);          // this.color === "red"
f.call(x, 1, 2, 3); // `this' + arguments.

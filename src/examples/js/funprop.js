let x = {color: "magenta"};
let y = {color: "orange" };

let z = function() {
  console.log("my color is: ", this.color);
};

x.log = y.log = z;

x.log();
y.log();

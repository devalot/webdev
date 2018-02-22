var apple  = {name: "Apple",  color: "red"   };
var orange = {name: "Orange", color: "orange"};

var logColor = function() {
  console.log(this.color);
};

apple.logColor  = logColor;
orange.logColor = logColor;

apple.logColor();
orange.logColor();

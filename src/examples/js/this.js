// <<: manual
var apple  = {name: "Apple",  color: "red"   };
var orange = {name: "Orange", color: "orange"};

var logColor = function() {
  console.log(this.color);
};

apple.logColor  = logColor;
orange.logColor = logColor;

apple.logColor();
orange.logColor();
// :>>

// Set up the next example:
children = []; // Global!!!

// <<: gotcha
function Parent(children) {
  this.children = [];

  // Add children that have valid names:
  children.forEach(function(name) {
    if (name.match(/\S/)) {
      this.children.push(name);
    }
  });
}

var p = new Parent(["Peter", "Paul", "Mary"]);
// :>>

console.assert(children.length === 3);

// <<: this-bind
function ParentWithBind(children) {
  this.children = [];

  // Add children that have valid names:
  children.forEach(function(name) {
    if (name.match(/\S/)) {
      this.children.push(name);
    }
  }.bind(this));
}
// :>>

var p2 = new ParentWithBind(["Peter", "Paul", "Mary"]);
console.assert(p2.children.length === 3);

// <<: this-alias
function ParentWithAlias(children) {
  var self = this;
  this.children = [];

  // Add children that have valid names:
  children.forEach(function(name) {
    if (name.match(/\S/)) {
      self.children.push(name);
    }
  });
}
// :>>

var p3 = new ParentWithAlias(["Peter", "Paul", "Mary"]);
console.assert(p3.children.length === 3);

// <<: this-arrow
function ParentWithArrow(children) {
  this.children = [];

  // Add children that have valid names:
  children.forEach(name => {
    if (name.match(/\S/)) {
      this.children.push(name);
    }
  });
}
// :>>

var p4 = new ParentWithArrow(["Peter", "Paul", "Mary"]);
console.assert(p4.children.length === 3);

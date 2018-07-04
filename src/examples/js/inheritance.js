/******************************************************************************/
// <<: rec
var Rectangle = function(width, height) {
  this.width  = width;
  this.height = height;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

var rect = new Rectangle(10, 20);
rect.area(); // 200
// :>>

// <<: generic
Rectangle.withWidth = function(width) {
  return new Rectangle(width, width);
};

var rect = Rectangle.withWidth(10);
rect.area(); // 100
// :>>
console.assert(rect.area() === 100);

// <<: sq
var Square = function(width) {
  Rectangle.call(this, width, width);
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.sideSize = function() {return this.width;};

var sq = new Square(10);
sq.area(); // 100
// :>>

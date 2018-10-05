/******************************************************************************/
// <<: rec
let Rectangle = function(width, height) {
  this.width  = width;
  this.height = height;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

let rect = new Rectangle(10, 20);
rect.area(); // 200
// :>>

// <<: generic
Rectangle.withWidth = function(width) {
  return new Rectangle(width, width);
};

let rect = Rectangle.withWidth(10);
rect.area(); // 100
// :>>
console.assert(rect.area() === 100);

// <<: sq
let Square = function(width) {
  Rectangle.call(this, width, width);
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.sideSize = function() {return this.width;};

let sq = new Square(10);
sq.area(); // 100
// :>>

/******************************************************************************/
// <<: new
let Rectangle = function(width, height) {
  this.width  = width;
  this.height = height;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

let Square = function(width) {
  let rect = new Rectangle(width, width);
  rect.isSquare = true;
  return rect;
};

let sq = new Square(10);
console.log(sq.area());
// :>>

/******************************************************************************/
// <<: create
let Rectangle = function(width, height) {
  let rect = Object.create(Rectangle.prototype);
  rect.width  = width;
  rect.height = height;
  return rect;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

let Square = function(width) {
  let rect = Rectangle(width, width);
  rect.isSquare = true;
  return rect;
};

let sq = Square(10);
console.log(sq.area());
// :>>

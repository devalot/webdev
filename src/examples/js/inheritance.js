/******************************************************************************/
// <<: rec
const Rectangle = function (width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

const rect = new Rectangle(10, 20)
rect.area() // 200
// :>>

// <<: super-constructor
const Super = function (a) {
  this.a = a
}

const Sub = function (a, b) {
  Super.call(this, a)
  this.b = b
}

const sub = new Sub(1, 2)
sub // Sub { a: 1, b: 2 }
// :>>

// <<: generic
Rectangle.withWidth = function (width) {
  return new Rectangle(width, width)
}

const rect = Rectangle.withWidth(10)
rect.area() // 100
// :>>
console.assert(rect.area() === 100)

// <<: sq
const Square = function (width) {
  Rectangle.call(this, width, width)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.sideSize = function () {
  return this.width
}

const sq = new Square(10)
sq.area() // 100
// :>>

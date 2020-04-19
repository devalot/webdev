/******************************************************************************/
// <<: static
class Rectangle {
  constructor(width, height) {
    this.width  = width;
    this.height = height;
  }

  static withWidth(width) {
    return new Rectangle(width, width);
  }

  area() {
    return this.width * this.height;
  }
}

var rect = Rectangle.withWidth(10);
rect.area(); // 100
// :>>
console.assert(rect.area() === 100);

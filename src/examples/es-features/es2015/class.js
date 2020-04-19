/******************************************************************************/
// <<: rec
class Rectangle {
  constructor(width, height) {
    this.width  = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
// :>>

// <<: rec-new
var rect = new Rectangle(10, 20);
rect.area(); // 200
// :>>
console.log(rect.area());

/******************************************************************************/
// <<: sq
class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  sideSize() {
    return this.width;
  }
}
// :>>

// <<: sq-new
var sq = new Square(10);
sq.area(); // 100
// :>>
console.log(sq.area());

/******************************************************************************/
// <<: Base class.
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

var peter = new Person("Peter");
peter.sayName();
// :>>

/******************************************************************************/
// <<: Derived class.
class Child extends Person {
  constructor(name) {
    super(name);
    this.minor = true;
  }

  isMinor() {
    return this.minor;
  }
}

var abi = new Child("Abi");
abi.sayName();
console.log(abi.isMinor());
// :>>

/******************************************************************************/
// <<: Class-static methods.
class Foo {
  static sayHello() {
    console.log("Hello from Foo");
  }
}

Foo.sayHello();
// :>>

/******************************************************************************/
// <<: get-set
class Car {
  constructor() {
    this._speed = 0;
  }

  get speed() {
    return this._speed;
  }

  set speed(x) {
    if (x < 0 || x > 100) throw "I don't think so";
    this._speed = x;
  }
}

var toyota = new Car();
toyota.speed = 55; // Calls the `set speed' function.
// :>>

console.assert(toyota.speed === 55);

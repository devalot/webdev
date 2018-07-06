"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******************************************************************************/
// <<: rec
var Rectangle = function () {
  function Rectangle(width, height) {
    _classCallCheck(this, Rectangle);

    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "area",
    value: function area() {
      return this.width * this.height;
    }
  }]);

  return Rectangle;
}();
// :>>

// <<: rec-new


var rect = new Rectangle(10, 20);
rect.area(); // 200
// :>>
console.log(rect.area());

/******************************************************************************/
// <<: sq

var Square = function (_Rectangle) {
  _inherits(Square, _Rectangle);

  function Square(width) {
    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, width, width));
  }

  _createClass(Square, [{
    key: "sideSize",
    value: function sideSize() {
      return this.width;
    }
  }]);

  return Square;
}(Rectangle);
// :>>

// <<: sq-new


var sq = new Square(10);
sq.area(); // 100
// :>>
console.log(sq.area());

/******************************************************************************/
// <<: Base class.

var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      console.log(this.name);
    }
  }]);

  return Person;
}();

var peter = new Person("Peter");
peter.sayName();
// :>>

/******************************************************************************/
// <<: Derived class.

var Child = function (_Person) {
  _inherits(Child, _Person);

  function Child(name) {
    _classCallCheck(this, Child);

    var _this2 = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

    _this2.minor = true;
    return _this2;
  }

  _createClass(Child, [{
    key: "isMinor",
    value: function isMinor() {
      return this.minor;
    }
  }]);

  return Child;
}(Person);

var abi = new Child("Abi");
abi.sayName();
console.log(abi.isMinor());
// :>>

/******************************************************************************/
// <<: Class-static methods.

var Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, null, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello from Foo");
    }
  }]);

  return Foo;
}();

Foo.sayHello();
// :>>

/******************************************************************************/
// <<: get-set

var Car = function () {
  function Car() {
    _classCallCheck(this, Car);

    this._speed = 0;
  }

  _createClass(Car, [{
    key: "speed",
    get: function get() {
      return this._speed;
    },
    set: function set(x) {
      if (x < 0 || x > 100) throw "I don't think so";
      this._speed = x;
    }
  }]);

  return Car;
}();

var toyota = new Car();
toyota.speed = 55; // Calls the `set speed' function.
// :>>

console.assert(toyota.speed === 55);
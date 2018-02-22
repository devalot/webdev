"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Child).call(this, name));

    _this.minor = true;
    return _this;
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
// <<: Getters and setters.

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
      if (x > 100) throw "Slow the hell down";
      if (x < 0) throw "Uh, what?";
      this._speed = x;
    }
  }]);

  return Car;
}();

var toyota = new Car();
toyota.speed = 99;
console.log(toyota.speed);
// :>>
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******************************************************************************/
// <<: static
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
  }], [{
    key: "withWidth",
    value: function withWidth(width) {
      return new Rectangle(width, width);
    }
  }]);

  return Rectangle;
}();

var rect = Rectangle.withWidth(10);
rect.area(); // 100
// :>>
console.assert(rect.area() === 100);
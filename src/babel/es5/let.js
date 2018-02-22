"use strict";

(function () {
  var _loop = function _loop(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  };

  /****************************************************************************/
  // <<: Does this look familiar?
  for (var i = 0; i < 3; ++i) {
    _loop(i);
  }
  // :>>
})();
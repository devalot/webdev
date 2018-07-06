"use strict";

/******************************************************************************/
// <<: Default argument values.
function add(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return x + y;
}

add(1); // 3
// :>>
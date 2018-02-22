"use strict";

/******************************************************************************/
// <<: Default argument values.
function add(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  return x + y;
}

add(1); // 3
// :>>
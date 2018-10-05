/******************************************************************************/
// <<: short
(function() {
  let x = 1;
  return x;
})();
// :>>

/******************************************************************************/
// <<: long
(function() {  // (1) Anonymous function expression.

  let x = 1; // (2) Body of function.
  return x;

})();  // (3) Close function and call function.
// :>>

/******************************************************************************/
// <<: private
let helper = (function() {

  let x = 1;

  return {
    getX: function()  {return x;},
    setX: function(y) {x = y;},
  };

})();

helper.setX(3);
helper.getX(); // 3
// :>>


/******************************************************************************/
// <<: two-steps
function helper () {
  let x = 1;

  return {
    getX: function()  {return x;},
    setX: function(y) {x = y;   },
  };
}

let h = helper();
h.setX(3);
h.getX(); // 3
// :>>

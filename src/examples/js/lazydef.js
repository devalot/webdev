/******************************************************************************/
// <<: slow
let digitName = function(n) {
  let names = ["zero", "one", "two", /* more elements */];
  return names[n] || "";
};
// :>>

/******************************************************************************/
// <<: fixed
let digitName = function(n) {
  let names = ["zero", "one", "two", /* more elements */];

  // No `var' here!
  digitName = function(n) {
    return names[n] || "";
  };

  return digitName(n);
};
// :>>

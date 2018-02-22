/******************************************************************************/
// Example Data:
var data = [20, 56, 42, 89, 16];

/******************************************************************************/
// Filtering, long form:
var isInRange = function(number) {
  return number > 20 && number < 80;
};

var filteredData = data.filter(isInRange);

/******************************************************************************/
// Filtering via idiomatic JavaScript:
var filteredData = data.filter(function(number) {
  return number > 20 && number < 80;
});

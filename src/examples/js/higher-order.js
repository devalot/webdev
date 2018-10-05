/******************************************************************************/
// Example Data:
let data = [20, 56, 42, 89, 16];

/******************************************************************************/
// Filtering, long form:
let isInRange = function(number) {
  return number > 20 && number < 80;
};

let filteredData = data.filter(isInRange);

/******************************************************************************/
// Filtering via idiomatic JavaScript:
let filteredData2 = data.filter(n => n > 20 && n < 80);

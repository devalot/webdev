/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an object with two
// properties:
//
//   setTemp: A function that takes a single argument and sets the
//            current temperature to the value of the argument.
//
//            This function should *not* allow the temperature to go
//            above 100 or below 0.
//
//            Store the current temperature in a closure variable.
//
//   getTemp: A function that returns the last temperature set by
//            the setTemp function.
//
function closure() {
  let temp = 0;

  let getTemp = function() {
    return temp;
  };

  let setTemp = function(newTemp) {
    if (newTemp >= 0 && newTemp <= 100) {
      temp = newTemp;
    }
  };

  return { getTemp, setTemp };
}

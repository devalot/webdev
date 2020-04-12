import { WeirdAdder } from '../adder'

describe('Jest Exercises 1 and 2', () => {

  describe('WeirdAdder', () => {

    // Exercise 1:
    //
    // Write a test that verifies that the `add' method of the
    // `WeirdAdder' class correctly sums and returns its two
    // arguments.

    it('should add two numbers together', () => {})

    /**************************************************************************/
    // Exercise 2:
    //
    // Using Jest spies, write a test that calls the `add' method
    // and confirm that the `foundOdd' method is also called.

    it('should note when an odd is found', () => {})

    /**************************************************************************/
    // Exercise 3:
    //
    // Using Jest spies, write a test that `getOddSumsCount` returns the length
    // of odd sums returned by `_getOddSums`.
    //
    // HINT: provide a spy mock implementation for `_getOddSums` that returns
    // an array of odd sums.

    it('should note an odd is found when isOdd returns true', () => {})

    // TODO add stub example
  })
})

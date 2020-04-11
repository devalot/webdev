import { WeirdAdder } from '../adder'

describe('Jasmine Exercises 1 and 2', function () {

  /****************************************************************************/
  describe('WeirdAdder', function () {

    // Example:
    it('example testing weird adder class', function () {
      let adder = new WeirdAdder()
      expect(adder instanceof WeirdAdder).toBeTruthy()
    })

    /**************************************************************************/
    // Exercise 1:
    //
    // Write a test that verifies that the `add' method of the
    // `WeirdAdder' class correctly sums and returns its two
    // arguments.

    it('should add two numbers together', () => {
      const adder = new WeirdAdder()
      expect(adder.add(1, 3)).toEqual(4)
      expect(adder.add(10, 2)).toEqual(12)
    })

    /**************************************************************************/
    // Exercise 2:
    //
    // Using Jest spies, write a test that calls the `add' method
    // and confirm that the `foundOdd' method is also called.

    it('should note when an odd is found', () => {
      const adder = new WeirdAdder()
      // adder.foundOdd = jest.fn()
      jest.spyOn(adder, 'foundOdd')
      adder.add(1, 2)
      expect(adder.foundOdd.mock.calls).toEqual([
        [3],
      ])
    })

  })
})

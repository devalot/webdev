describe("Jasmine Exercises 1 and 2", function() {

  /****************************************************************************/
  describe("WeirdAdder", function() {

    /**************************************************************************/
    class WeirdAdder {
      add(x, y) {
        let sum = x + y;

        // If odd:
        if (sum % 2 !== 0) {
          return this.foundOdd(sum);
        }

        return sum;
      }

      foundOdd(n) {
        console.log(`${n} is odd`);
        return n;
      }
    }

    /**************************************************************************/
    // Example:
    it("example testing weird adder class", function() {
      let adder = new WeirdAdder();
      expect(adder instanceof WeirdAdder).toBeTruthy();
    });

    /**************************************************************************/
    // Exercise 1:
    //
    // Write a test that verifies that the `add' method of the
    // `WeirdAdder' class correctly sums and returns its two
    // arguments.
    it("should sum two numbers correctly", function() {
      let adder = new WeirdAdder();
      expect(adder.add(1, 2)).toBe(3);
      expect(adder.add(2, 2)).toBe(4);
    });

    /**************************************************************************/
    // Exercise 2:
    //
    // Using Jasmine spies, write a test that calls the `add' method
    // and confirm that the `foundOdd' method is also called.
    it("should call foundOdd on odd numbers", function() {
      let adder = new WeirdAdder();
      spyOn(adder, 'foundOdd').and.callThrough();
      expect(adder.add(1, 2)).toBe(3);
      expect(adder.foundOdd).toHaveBeenCalled();
    });

  });
});

describe("Jasmine Exercise 3", function() {

  /****************************************************************************/
  describe("DelayedAdder", function() {

    /**************************************************************************/
    class DelayedAdder {
      // Returns a promise that resolves to the sum of x and y:
      add(x, y) {
        return new Promise(function(resolve, reject) {
          setTimeout(() => resolve(x + y), 0);
        });
      }
    }

    /**************************************************************************/
    // Example:
    it("example testing delayed adding class", function() {
      let adder = new DelayedAdder();
      let p = adder.add(1, 2);

      expect(p instanceof Promise).toBeTruthy();
    });


    /**************************************************************************/
    // Exercise 3:
    //
    // Write a test the confirms that the `add' method of the
    // `DelayedAdder' class works correctly.  Keep in mind that `add'
    // is asynchronous function and returns a promise instead of a number.


  });
});

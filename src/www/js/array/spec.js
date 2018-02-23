describe("Array Exercises", function() {
  var usersCopy = [].concat(users);

  describe("Exercise 1", function() {
    it("Should return an array with one element", function() {
      var result = exercise1();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(1);
    });
    it("Should return a user with age 17", function() {
      var result = exercise1();
      expect(typeof result[0]).toBe("object");
      expect(result[0].age).toBe(17);
      expect(result[0].username).toBe("ahxae");
    });
  });

  describe("Exercise 2", function() {
    it("Should return an array of 4 strings", function() {
      var result = exercise2();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);
      expect(result).toEqual(["caiva", "ahxae", "i4tie", "bvu7F"]);
    });
  });

  describe("Exercise 3 (Bonus)", function() {
    var result = exercise3();

    if (result !== undefined) {
      it("Should return an array of 1 element", function() {
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(1);
        expect(result[0]).toBe("1");
      });
    }
  });

  describe("Exercise 4 (Bonus)", function() {
    var result = exercise4();

    if (result !== undefined) {
      it("Should return an array of 4 elements", function() {
        var reversed = [].concat(usersCopy).reverse();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(4);
        expect(result).toEqual(reversed);
      });
    }
  });
});

describe("Primitives Exercise", function() {
  describe("Exercise 1", function() {
    it("Should return the number 3", function() {
      expect(exercise1()).toBe(3);
    });
  });

  describe("Exercise 2", function() {
    it("Should return a string of at least 5 characters", function() {
      var result = exercise2();
      expect(result).toBeDefined();
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(4);
    });
  });
});

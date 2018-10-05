describe("Exception Exercise", function() {
  it("Should provide an OddNumberError exception", function() {
    expect(typeof OddNumberError).toBe("function");
  });

  it("Should provide a check function", function() {
    expect(typeof check).toBe("function");
  });

  it("Should return true for even numbers", function() {
    expect(check(2)).toBe(true);
  });

  it("Should throw an exception for odd numbers", function() {
    let f = function() { check(33); };
    expect(f).toThrowError(OddNumberError);
  });
});

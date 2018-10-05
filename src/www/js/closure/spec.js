describe("Closure Exercise", function() {
  it("Should return an object with two properties", function() {
    let result = closure();
    expect(result.getTemp).toBeDefined();
    expect(result.setTemp).toBeDefined();
  });

  it("Should support temperature adjustment", function() {
    let result = closure();
    result.setTemp(42);
    expect(result.getTemp()).toBe(42);

    result.setTemp(0);
    expect(result.getTemp()).toBe(0);
  });

  it("Should keep temperature in allowed range", function() {
    let result = closure();
    result.setTemp(50);

    result.setTemp(101);
    expect(result.getTemp()).toBe(50);

    result.setTemp(-1);
    expect(result.getTemp()).toBe(50);
  });

  it("Should use a unique closure", function() {
    let resultA = closure();
    let resultB = closure();

    resultA.setTemp(42);
    resultB.setTemp(43);

    expect(resultA.getTemp()).toBe(42);
    expect(resultB.getTemp()).toBe(43);
  });
});

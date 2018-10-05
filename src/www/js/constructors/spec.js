describe("Constructor Functions Exercise", function() {
  it("Should provide a Calculator function", function() {
    expect(typeof Calculator).toBe("function");
  });

  it("Should have prototype functions", function() {
    expect(typeof Calculator.prototype.add).toBe("function");
    expect(typeof Calculator.prototype.mul).toBe("function");
    expect(typeof Calculator.prototype.get).toBe("function");
  });

  it("Should default the initial value to zero", function() {
    let c1 = new Calculator(10);
    expect(c1.get()).toBe(10);

    let c2 = new Calculator();
    expect(c2.get()).toBe(0);
  });

  it("Should add and multiply numbers", function() {
    let c = new Calculator(10);

    c.push(5);
    c.add();
    expect(c.get()).toBe(15);

    c.push(2);
    c.mul();
    expect(c.get()).toBe(30);
  });

  it("Should support unique objects", function() {
    let c1 = new Calculator(10);
    let c2 = new Calculator(5);

    c1.push(2);
    c2.push(1);
    c1.add();
    c2.add();

    expect(c1.get()).toBe(12);
    expect(c2.get()).toBe(6);
  });

  it("Should be able to run example code", function() {
    let c = new Calculator(5);
    c.push(5);
    c.push(10);
    c.add();
    expect(c.get()).toBe(20);
  });
});

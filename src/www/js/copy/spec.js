describe("Object Copy Exercise", function() {
  let base = {color: "red"};
  let original;

  beforeEach(function() {
    original = Object.create(base);
    original.size  = 1;
    original.width = 2;
  });

  it("Should produce a new object", function() {
    let result = copy(original);
    expect(result instanceof Object).toBeTruthy();
    expect(result).not.toBe(original);
  });

  it("Should return an object with the correct properties", function() {
    let result = copy(original);
    expect(result.size).toBe(original.size);
    expect(result.width).toBe(original.width);
  });

  it("Should skip over inherited properties", function() {
    let result = copy(original);
    expect(result.color).toBeUndefined();
  });
});

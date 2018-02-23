describe("Object Copy Exercise", function() {
  var base = {color: "red"};
  var original;

  beforeEach(function() {
    original = Object.create(base);
    original.size  = 1;
    original.width = 2;
  });

  it("Should produce a new object", function() {
    var result = copy(original);
    expect(result instanceof Object).toBeTruthy();
    expect(result).not.toBe(original);
  });

  it("Should return an object with the correct properties", function() {
    var result = copy(original);
    expect(result.size).toBe(original.size);
    expect(result.width).toBe(original.width);
  });

  it("Should skip over inherited properties", function() {
    var result = copy(original);
    expect(result.color).toBeUndefined();
  });
});

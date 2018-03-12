/******************************************************************************/
describe("Partial Function Application", function() {

  /****************************************************************************/
  it("should allow partial function application", function() {
    var f = function(x, y, z) { return [x, y, z]; };

    var g = f.curry();
    expect(typeof g).toBe("function");

    var h = g("A");
    expect(typeof h).toBe("function");

    var a = h("B", "C");
    expect(Array.isArray(a)).toBe(true);
    expect(a).toEqual(["A", "B", "C"]);
  });

  /****************************************************************************/
  it("should pass `this' through", function() {
    // <<: obj.add
    var obj = {
      magnitude: 10,

      add: function(x, y) {
        return (x + y) * this.magnitude;
      }.curry()
    };
    // :>>

    // <<: add10
    var add10 = obj.add(10);
    add10(2); // Should return 120
    // :>>

    expect(typeof add10).toBe("function");
    expect(add10(2)).toBe(120);
  });
});

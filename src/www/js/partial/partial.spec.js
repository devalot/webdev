/******************************************************************************/
describe("Partial Function Application", function() {

  /****************************************************************************/
  it("should allow partial function application", function() {
    let f = function(x, y, z) { return [x, y, z]; };

    let g = f.curry();
    expect(typeof g).toBe("function");

    let h = g("A");
    expect(typeof h).toBe("function");

    let a = h("B", "C");
    expect(Array.isArray(a)).toBe(true);
    expect(a).toEqual(["A", "B", "C"]);
  });

  /****************************************************************************/
  it("should pass `this' through", function() {
    // <<: obj.add
    let obj = {
      magnitude: 10,

      add: function(x, y) {
        return (x + y) * this.magnitude;
      }.curry()
    };
    // :>>

    // <<: add10
    let add10 = obj.add(10);
    add10(2); // Should return 120
    // :>>

    expect(typeof add10).toBe("function");
    expect(add10(2)).toBe(120);
  });
});

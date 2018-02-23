describe("Parsing Exercise", function() {
  it("Should return 2 when given ['1', '2', 'A']", function() {
    expect(parse.apply(null, ["1", "2", "A"])).toBe(2);
  });

  it("Should return 0 when given ['A', 'B', 'C']", function() {
    expect(parse.apply(null, ["A", "B", "C"])).toBe(0);
  });

  it("Should return 1 when given ['F1', '0']", function() {
    expect(parse.apply(null, ["F1", "0"])).toBe(1);
  });

  it("Should return 1 when given ['1', '.1']", function() {
    expect(parse.apply(null, ["1", ".1"])).toBe(1);
  });

  it("Should return 0 when given a bunch of nulls", function() {
    expect(parse.apply(null, new Array(16))).toBe(0);
  });
});

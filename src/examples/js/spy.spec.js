describe("a function", function() {
  // <<: beforeEach
  let foo;

  beforeEach(function() {
    foo = {
      plusOne: function(n) { return n + 1; },
    };
  });
  // :>>

  // <<: call
  it("should be called", function() {
    spyOn(foo, 'plusOne');
    let x = foo.plusOne(1);

    expect(foo.plusOne).toHaveBeenCalled();
    expect(x).toBeUndefined();
  });
  // :>>

  // <<: callThrough
  it("should call through and execute", function() {
    spyOn(foo, 'plusOne').and.callThrough();
    let x = foo.plusOne(1);

    expect(foo.plusOne).toHaveBeenCalled();
    expect(x).toBe(2);
  });
  // :>>
});

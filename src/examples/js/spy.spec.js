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
    let x = foo.plusOne(42);

    expect(foo.plusOne).toHaveBeenCalled();
    expect(foo.plusOne).toHaveBeenCalledTimes(1);
    expect(foo.plusOne).toHaveBeenCalledWith(42);

    expect(x).toBeUndefined();
  });
  // :>>

  // <<: callThrough
  it("should call through and execute", function() {
    spyOn(foo, 'plusOne').and.callThrough();
    let x = foo.plusOne(42);

    expect(foo.plusOne).toHaveBeenCalled();
    expect(x).toBe(43);
  });
  // :>>

  // <<: callFake
  it("should call a fake implementation", function() {
    spyOn(foo, 'plusOne').and.callFake(n => n + 2);
    let x = foo.plusOne(42);

    expect(foo.plusOne).toHaveBeenCalled();
    expect(x).toBe(44);
  });
  // :>>
});

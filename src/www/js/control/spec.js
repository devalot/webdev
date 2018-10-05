describe("Flow Control Exercises", function() {
  let e1 = function(f) {
    return function() {
      it("Should return true when given 42", function() {
        expect(f(42)).toBeDefined();
        expect(f(42)).toBe(true);
      });
      it("Should return false when given 1", function() {
        expect(f(1)).toBeDefined();
        expect(f(1)).toBe(false);
      });
      it("Should return false when given \"42\"", function() {
        expect(f("42")).toBeDefined();
        expect(f("42")).toBe(false);
      });
    };
  };


  let e2and3 = function(f) {
    return function() {
      e1(f)();

      it("Should return null when given 43", function() {
        expect(f(43)).toBeNull();
      });

      it("Should return false when given \"43\"", function() {
        let result = f("43");
        expect(result).toBe(false);
      });
    };
  };

  let e4 = function(f) {
    let counter = {f: function() {}};

    return function() {
      it("Should call the counter function 3 times", function() {
        spyOn(counter, "f");
        f(counter.f);
        expect(counter.f).toHaveBeenCalledTimes(3);
      });
    };
  };

  let e5 = function(f) {
    if (f([]) !== undefined) {
      return function() {
        it("Should correctly sum numbers", function() {
          expect(f([1, 2, 3, 4])).toBe(10);
          expect(f([8, 2, 6, 3])).toBe(19);
        });
      };
    } else {
      return function() {};
    }
  };

  describe("Exercise 1", e1(exercise1));
  describe("Exercise 2", e2and3(exercise2));
  describe("Exercise 3", e2and3(exercise3));
  describe("Exercise 4", e4(exercise4));
  describe("Exercise 5", e5(exercise5));
});

$(function() {
  var e1 = function(value, test) {
    test.assert(value(42)   === true,  "should have returned true when given 42");
    test.assert(value(1)    === false, "should have returned false when given 1");
    test.assert(value("42") === false, "should have returned false when given string \"42\"");
    return true;
  };

  var e2And3 = function(value, test) {
    e1(value, test);
    test.assert(value(43)   === null,  "should have returned null when given 43");
    test.assert(value("43") === false, "should have returned false when given string \"43\"");
    return true;
  };

  var assertFs = function(test, f, callback) {
    test.confirm(f);

    return function() {
      test.assertInstanceOf(f, Function);
      return callback(f, test);
    };
  };

  new Confirm(function(test) {
    test.assertValues([
      assertFs(test, Exercise1, e1),
      assertFs(test, Exercise2, e2And3),
      assertFs(test, Exercise3, e2And3),

      assertFs(test, Exercise4, function(value) {
        var times = 0;
        var counter = function() {times += 1;};

        value(counter);
        test.assert(times === 3, "the counter function should have been called 3 times");
        return true;
      }),

      assertFs(test, Exercise5, function(value) {
        var result = null;

        var sets = [
          {numbers: [1, 2, 3, 4], sum: 10},
          {numbers: [8, 2, 6, 3], sum: 19},
        ];

        sets.forEach(function(s) {
          result = value(s.numbers);
          if (result === undefined) return null; // Bonus not solved.
          test.assert(result === s.sum, "the sum of " + s.numbers + " should be: " + s.sum);
        });

        return result === undefined ? null : true;
      }),
    ]);
  });
});

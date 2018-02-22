$(function() {
  var testF = function(test, values, expect) {
    test.confirm(Parse);

    return function(f) {
      test.assertInstanceOf(f, Function);

      var result = f.apply(null, values);
      test.assertInstanceOf(result, Number);
      test.assertEqual(expect, result);

      return true;
    };
  };

  new Confirm(function(confirm) {
    confirm.assertValues([
      testF(confirm, ["1", "2", "A"], 2),
      testF(confirm, ["A", "B", "C"], 0),
      testF(confirm, ["F1", "0",   ], 1),
      testF(confirm, ["1", ".1"],     1),
      testF(confirm, new Array(16),   0),
    ]);
  });
});

$(function() {
  new Confirm(function(test) {
    test.assertValues([
      test.assertFunction(Exercise1, [], function(result) {
        test.assertEqual(3, result);
        return true;
      }),

      test.assertFunction(Exercise2, [], function(result) {
        test.assertInstanceOf(result, String);
        test.assert(result.length >= 5, "expected at least 5 characters");
        return true;
      }),

      test.assertFunction(Exercise3, [], function(result) {
        test.assertInstanceOf(result, Array);
        test.assert(result.length >= 5, "expected at least 5 elements");
        return true;
      }),
    ]);
  });
});

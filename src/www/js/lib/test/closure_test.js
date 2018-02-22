$(function() {
  var checks = [
    function(value, test) {
      test.assertInstanceOf(value, Function);

      var api = value();
      test.assertInstanceOf(api, Object);
      test.assert(api.getTemp, "should have a getTemp method");
      test.assert(api.setTemp, "should have a setTemp method");
      test.assert(Object.keys(api).length === 2, "should only have two properties");

      var now = Date.now();
      api.setTemp(now);

      test.assert(api.getTemp() === now,
                  "getTemp should return the value given to setTemp");

      return true;
    },
  ];

  new Confirm(function(confirm) {
    confirm.confirm(ClosureExercise);
    confirm.assertValues(checks);
  });
});

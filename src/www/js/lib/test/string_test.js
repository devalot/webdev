$(function() {
  var confirm = new Confirm(function(confirm) {
    var today = (new Date()).toDateString();

    confirm.assertInstanceOf(processString, Function);

    confirm.assertEqual(today + " 0", processString("today"));
    confirm.assertEqual("3.14 0", processString("pi"));
    confirm.assertEqual("xx 3.14 xx 4", processString("xx pi xx"));
    confirm.assertEqual("xx " + today + " 3.14 2", processString("xx today pi"));

    confirm.record(true, "passed");
  });
});

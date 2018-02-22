$(function() {
  new Confirm(function(confirm) {
    confirm.assertInstanceOf(copy, Function);

    var parent   = {color: "red"};
    var incoming = Object.create(parent);

    incoming.size  = 1;
    incoming.width = 2;

    var outgoing = copy(incoming);

    confirm.assertInstanceOf(outgoing, Object);

    confirm.refute(incoming === outgoing, "should have returned a different object");

    confirm.assert(outgoing.size === 1 &&
                   outgoing.width === 2, "properties and values should have been copied");

    confirm.refute(outgoing.color, "should skip inherited properties");

    confirm.record(true, "passed");
  });
});

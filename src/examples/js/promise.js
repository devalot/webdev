// <<: without
$.getJSON("/a", function(data_a) {
  $.getJSON("/b/" + data_a.id, function(data_b) {
    $.getJSON("/c/" + data_b.id, function(data_c) {
      console.log("Got C: ", data_c);
    }, function() {
      console.error("Call failed");
    });
  }, function() {
    console.error("Call failed");
  });
}, function() {
  console.error("Call failed");
});
// :>>

// <<: with
$.getJSON("/a").
  then(function(data) {
    return $.getJSON("/b/" + data.id);
  }).
  then(function(data) {
    return $.getJSON("/c/" + data.id);
  }).
  then(function(data) {
    console.log("Got C: ", data);
  }).
  catch(function(message) {
    console.error("Something failed:", message);
  });
// :>>

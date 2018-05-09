$(function() {
  function load() {
    $.getJSON("/api/artists")
      .then(function(artists) {
        var template = $("#template").html();
        var view = Mustache.render(template, {artists: artists});
        $("#view").html(view);
      })
      .fail(function(error) {
        console.error("bloody hell: ", error);
      });
  }

  $("#load").click(load);
});

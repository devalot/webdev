$(function() {
  /****************************************************************************/
  function load() {
    // <<: ajax
    $.getJSON("/api/artists")
      .then(function(artists) {
        var template = $("#template").html();
        var view = Mustache.render(template, {artists: artists});
        $("#view").html(view);
      })
      .fail(function(error) {
        console.error("bloody hell: ", error);
      });
    // :>>
  }

  /****************************************************************************/
  function fake() {
    var artists = [
      "Kool Moe Dee (1977)",
      "Fever Ray (2009)",
      "Die Antwoord (2008)",
    ];

    // <<: create
    artists.forEach(function(a) {
      $("<li>").text(a).appendTo("#view ul");
    });
    // :>>
  }

  /****************************************************************************/
  function logger() {
    var what = {childList: true};
    var view = document.getElementById("view");

    var observer = new MutationObserver(function() {
      // <<: fetch
      $("#view li").each(function() {
        console.log($(this).text());
      });
      // :>>
    });

    observer.observe(view, what);
  }

  /****************************************************************************/
  // <<: events
  $("#view").click(function(event) {
    console.log(event.target, "was clicked");
  });

  $("#reload").on("click", function(event) {
    $("#view").html("");
    load();
  });
  // :>>

  $("#fake").click(fake);

  /****************************************************************************/
  logger();
  load();
});

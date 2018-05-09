// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS #1:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
//
// BONUS #2:
//
// After displaying a list of artist details, also display a list of
// album names.  A list of albums can be fetched using the following
// URL:
//     /api/artists/N/albums
//
// Wait for the DOM to be ready:
$(function() {
  var artistsUL = $("#artists");
  var albumsUL  = $("#details");

  artistsUL.click(function(e) {
    var id = $(e.target).attr("data-artist-id");
    if (id) artistClick(id);
  });

  var artistClick = function(id) {
    albumsUL.html("");

    Ajax.get("/api/artists/" + id + "/albums")
      .then(function(albums) {
        $(albums).each(function() {
          $("<li>")
            .text(this.name)
            .appendTo(albumsUL);
        });
      });
  };

  var renderArtists = function(artists) {
    artistsUL.html("");
    albumsUL.html("");

    $(artists).each(function() {
      $("<li>")
        .text(this.name + " (" +
              this.formation_year + ")")
        .attr("data-artist-id", this.id)
        .appendTo(artistsUL);
    });

  };

  $("button").click(function() {
    Ajax.get("/api/artists")
      .then(function(artists) {
        renderArtists(artists);
      })
      .catch(function(message) {
        // TODO: Display error message to the user.
        console.error(message);
      });
  });

});

ArtistsController = (function(){

  // Display all artists.
  var index = function() {
    Artist.fetchAll()
      .then(function(artists) {
        View.set("artists-index", {artists});
        document.getElementById("artists-list")
          .addEventListener("click", function(e) {
            var href = e.target.getAttribute("href");
            var m = href && href.match(/artists\/(\d+)/);
            if (m) show(m[1]);
          });
      });
  };

  // Display a single artist.
  var show = function(id) {
    Artist.fetchOne(id)
      .then(artist => View.set("artists-show", artist));
  };

  // Display a form for creating a new artist.
  var form = function() {
  };

  // Taking values from a form, create a new artist.
  var create = function() {
  };

  // Public interface:
  return {
    index:  index,
    show:   show,
    form:   form,
    create: create,
  };
})();

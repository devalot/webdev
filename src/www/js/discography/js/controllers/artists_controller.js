ArtistsController = (function(){

  // Display all artists.
  var index = function() {
    // Step 1: Fetch all artists.
    Artist.fetchAll()
      .then(function(artists) {
        // Step 2: Render our template.
        View.set("artists-index", {artists});
      });
  };

  // Display a single artist.
  var show = function(id) {
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

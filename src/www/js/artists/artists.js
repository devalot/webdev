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

// Your code here.
var View = function(selector, callback) {
  this.element = document.querySelector(selector);
  this.callback = callback;
};

View.prototype = {
  render: function(items) {
    var self = this;
    self.element.innerHTML = "";

    items.forEach(function(item) {
      var li = document.createElement("LI");
      self.callback(item, li);
      self.element.appendChild(li);
    });
  }
};

var albumsView = new View("#details", function(album, li) {
  li.textContent = album.name;
});

var artistsView = new View("#artists", function(artist, li) {
  li.textContent = artist.name + " (" + artist.formation_year + ")";
  li.setAttribute("data-id", artist.id);
});

$(artistsView.element).click(function(e) {
  var id = e.target.getAttribute("data-id");
  if (!id) return;
  $.getJSON("/api/artists/" + id + "/albums")
    .then(function(albums) {albumsView.render(albums);});
});

$("button").click(function() {
  $.getJSON("/api/artists")
    .then(function(artists) {
      artistsView.render(artists);
    });
});

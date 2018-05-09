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

/** A ListView class:
 *
 * @param String selector A CSS selector for the UL
 * @param Function callback A function that knows how to render a
 *                          single item into a <LI>.
 */
function ListView(selector, callback) {
  this.element = document.querySelector(selector);
  this.callback = callback;
}

// Render a list of items.
ListView.prototype.render = function(items) {
  var self = this;

  // Remove all existing items:
  self.element.innerHTML = "";

  items.forEach(function(item) {
    var li = document.createElement("LI");
    self.callback(item, li);
    self.element.appendChild(li);
  });
};

// Create a view for listing artists:
var artistsView = new ListView("#artists", function(artist, li) {
  li.textContent = artist.name +
    " (" + artist.formation_year + ")";
});

var button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log("The button was clicked!!");

  var request = new XMLHttpRequest();

  request.addEventListener("load", function() {
    console.log("load event fired with: ", request);
    artistsView.render(JSON.parse(request.responseText));
  });

  request.addEventListener("error", function() {
    console.error("error event fired with: ", request);
    // TODO: report an error to the user.
  });

  request.open("GET", "/api/artists");
  request.send();
});

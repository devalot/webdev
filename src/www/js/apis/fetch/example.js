(function() {
  function updateUI(data) {
    var view = document.getElementById("view");

    data.forEach(function(artist) {
      var li = document.createElement("LI");
      li.textContent = artist.name;
      view.appendChild(li);
    });
  }

  // <<: fetch
  fetch("/api/artists", {credentials: "same-origin"})
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      updateUI(data);
    })
    .catch(function(error) {
      console.log("Ug, fetch failed", error);
    });
  // :>>
})();

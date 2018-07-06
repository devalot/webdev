(function() {
  var doRegistration = function() {
    navigator.serviceWorker.register("worker.js")
      .then(function(registration) {
        console.log("registration complete");
      })
      .catch(function(error) {
        console.log("ERROR: " + error);
      });
  };

  var doFetch = function() {
    fetch("/api/artists")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("retrieved data: ", data);
      });
  };

  console.log("checking for service workers");

  if ("serviceWorker" in navigator) {
    console.log("registering service worker");
    doRegistration();

    // Send pings on button click:
    document.getElementById("ping").addEventListener("click", function() {
      console.log("sending ping to service worker");
      navigator.serviceWorker.controller.postMessage("ping");
    });

    // Make an XHR call on button click:
    document.getElementById("fetch").addEventListener("click", function() {
      doFetch();
    });

  } else {
    console.log("ERROR: service workers not supported");
  }
})();

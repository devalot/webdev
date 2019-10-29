(function() {
  let doRegistration = function() {
    // <<: register
    navigator.serviceWorker.register("worker.js")
      .then(function(registration) {
        console.log("registration complete");
      })
      .catch(function(error) {
        console.log("ERROR: " + error);
      });
    // :>>
  };

  let doFetch = function(resource) {
    fetch(`/api/${resource}`)
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
    document.getElementById("fetch-albums").addEventListener("click", function() {
      doFetch('albums');
    });
    document.getElementById("fetch-artists").addEventListener("click", function() {
      doFetch('artists');
    });

  } else {
    console.log("ERROR: service workers not supported");
  }
})();

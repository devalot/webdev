(function() {
  console.log("service worker loaded");

  // Service worker was installed.  This is where you'd want to start
  // caching the assets your site needs while offline.
  self.addEventListener("install", function() {
    console.log("installed");
    self.skipWaiting(); // activate a new version.
  });

  // A worker goes into the `waiting' state when a new version has
  // been loaded but can't activate because the site is currently
  // being used.  You can avoid this by calling `skipWaiting' as
  // demonstrated in the `install' event handler.
  self.addEventListener("waiting", function(e) {
    console.log("waiting for tabs to close");
  });

  // Called when a service worker was updated and activated.
  self.addEventListener("activate", function(e) {
    console.log("activated a new version of the service worker");
  });

  // If something goes wrong the `error' event fires:
  self.addEventListener("error", function() {
    console.log("an error occurred");
  });

  // Message from one of the JavaScript files running on the
  // registered site.
  self.addEventListener("message", function(e) {
    console.log("message from client: ", e.data);
  });

  // Primary purpose of Service Worker, act as a network proxy:
  self.addEventListener("fetch", function(e) {
    console.log("intercepted resource fetch: ", e.request.url);

    if (e.request.url.match(/artists$/)) {
      console.log("hijacking resource fetch and returning static content");

      let response = new Response(JSON.stringify({message: "hello"}));
      e.respondWith(response);
    }
  });

})();

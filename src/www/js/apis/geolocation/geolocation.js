Geolocation = (function() {

  let get = function(element) {
    let missing = function() {element.innerHTML = "MISSING.";};
    let error   = function() {element.innerHTML = "ERROR!";   };

    if (!("geolocation" in navigator)) {
      return missing();
    }

    navigator.geolocation.getCurrentPosition(function(pos) {
      element.innerHTML = "<p>" +
        pos.coords.latitude.toString()  + "<br/>" +
        pos.coords.longitude.toString() + "</p>";

      let img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" +
        pos.coords.latitude  + "," +
        pos.coords.longitude + "&zoom=13&size=300x300&sensor=false";

      element.appendChild(img);
    }, error);
  };

  // Public interface:
  return {get: get};
})();

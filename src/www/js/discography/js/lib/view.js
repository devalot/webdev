// jshint esversion:6

View = (function() {

  // Given a template ID and an object, fetch the template, render it
  // using Mustache, and insert its text into the HTML page.  Place
  // the rendered template text into the `<div id="view"></div>'
  // section of index.html.
  //
  // Mustache API Docs: https://github.com/janl/mustache.js
  let set = function(templateID, object) {
    let scriptTag = document.getElementById(templateID);
    let template = scriptTag ? scriptTag.innerHTML : "TEMPLATE MISSING";
    let view = document.getElementById("view");
    view.innerHTML = Mustache.render(template, object);
  };

  // Return the public API.
  // return {set: set};
  return {set};
})();

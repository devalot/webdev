(function() {

  // <<: debounce
  let input   = document.getElementById("search"),
      output  = document.getElementById("output"),
      timeout = null;

  let updateSearchResults = function() {
    output.textContent = input.value;
  };

  input.addEventListener("keydown", function(e) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(updateSearchResults, 100);
  });
  // :>>

})();

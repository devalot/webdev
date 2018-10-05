FileTest = (function() {

  let view, input;

  let display = function() {
    let firstFile = input.files[0];
    if (!firstFile) return;

    let ul = document.createElement("ul");

    let name = document.createElement("li");
    name.textContent = firstFile.name.toString();
    ul.appendChild(name);

    let size = document.createElement("li");
    size.textContent = firstFile.size.toString();
    ul.appendChild(size);

    let type = document.createElement("li");
    type.textContent = firstFile.type.toString();
    ul.appendChild(type);

    view.appendChild(ul);
  };

  let go = function(viewID, inputID)  {
    view  = document.getElementById(viewID);
    input = document.getElementById(inputID);
    input.addEventListener("change", display);
  };

  return {go: go};
})();

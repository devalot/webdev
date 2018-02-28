## Manipulating the DOM Tree

### Creating New Nodes

`document.createElement("a");`

  : Creates and returns a new node without inserting it into the DOM.
    In this example, a new `<a>` element is created.

`document.createTextNode("hello");`

  : Creates and returns a new text node with the given content.

### Adding Nodes to the Tree

~~~ {.javascript}
var parent = document.getElementById("customers"),
    existingChild = parent.firstElementChild,
    newChild = document.createElement("li");
~~~

`parent.appendChild(newChild);`

  : Appends `newChild` to the end of `parent.childNodes`.

`parent.insertBefore(newChild, existingChild);`

  : Inserts `newChild` in `parent.childNodes` just before the existing
    child node `existingChild`.

`parent.replaceChild(newChild, existingChild);`

  : Removes `existingChild` from `parent.childNodes` and inserts
    `newChild` in its place.

`parent.removeChild(existingChild);`

  : Removes `existingChild` from `parent.childNodes`.

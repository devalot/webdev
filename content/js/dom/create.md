## Manipulating the DOM Tree

### Creating New Nodes {#f89dbf4c258511e8952d0b8f8af2f634}

`document.createElement("a");`

  : Creates and returns a new node without inserting it into the DOM.
    In this example, a new `<a>` element is created.

`document.createTextNode("hello");`

  : Creates and returns a new text node with the given content.

### Adding Nodes to the Tree {#a5306c0a258611e8bfa2af6ab5c5b3cc}

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

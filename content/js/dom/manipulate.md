## Manipulating

### Creating New Nodes

`document.createElement('a')`

  : Returns a new node without inserting it into the DOM.

`document.createTextNode('hello')`

  : Returns a new text node.

Once you have an element, you can append it anywhere.
  
`parent.appendChild(newChild)`

  : Appends `newChild`.

### Creating New Nodes

Adding some text...

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="text"}
~~~

Adding an image...

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="img"}
~~~

### Creating New Nodes

Adding children to children for a list...

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="list"}
~~~

### Appending Multiple Times

`appendChild` on existing node *moves* it.

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="re-append"}
~~~

### Other Manipulations

Methods on a parent element:

`.insertBefore(newChild, existingChild)`

  : Inserts `newChild` before existing `existingChild`.

`.replaceChild(newChild, existingChild)`

  : Replaces `existingChild` with `newChild`.

`.removeChild(existingChild)`

  : Removes `existingChild`.

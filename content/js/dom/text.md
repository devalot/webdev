## Node Content

### HTML and Text Content {#a3af8004258611e88aa2efbe26ab52d0}

~~~ {.javascript}
var element = document.getElementById("foo"),
    name    = "bar";
~~~

`element.innerHTML`

  : Get or set the element's decedents as HTML.

`element.textContent`:

  : Get or set *all* of the text nodes (including decedents) as a
    single string.

`element.nodeValue`

  : If `element` is a text node, comment, or attribute node, returns
    the content of the node.

`element.value`

  : If `element` is a form input, returns its value.

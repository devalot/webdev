## Node Attributes

### Getting and Setting Node Attributes

~~~ {.javascript}
let element = document.getElementById("foo"),
    name    = "bar";
~~~

`element.getAttribute(name);`

  : Returns the value of the given attribute.

`element.setAttribute(name, value);`

  : Changes the value of the given attribute name to `value`.

`element.hasAttribute(name);`

  : Returns `true` if `element` has an attribute with the given name.

`element.removeAttribute(name);`

  : Removes the named attribute from `element`.

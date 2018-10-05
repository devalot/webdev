## The Class Attribute

### Class Attribute API

~~~ {.javascript}
let element = document.getElementById("foo"),
    name    = "bar";
~~~

`element.classList.add(name);`

  : Add `name` to the list of classes in the class attribute.

`element.classList.remove(name);`

  : Remove `name` from the list of classes in the class attribute.

`element.classList.toggle(name);`

  : If `name` is present in the class list, remove it.  Otherwise add
    it to the class list.

`element.classList.contains(name);`

  : Check to see if the class list contains `name`.

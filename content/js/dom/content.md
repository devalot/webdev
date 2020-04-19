## Node Content

### HTML

`element.innerHTML`:

  : Gets/sets HTML markup in an element

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="inner-html"}
~~~

### Text

`element.innerText`:

  : Gets/sets Human-visible text content

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="inner-text"}
~~~

(`.textContent` also works; it's more performant but less smart)

### Form Values

`inputElement.value`:

  : Gets/sets form input value

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="form-value"}
~~~

### Attributes

Elements can have attributes that specify behavior or store information.

```html
<img src="photo.jpg"> 
```

Element methods:

* `.getAttribute(name)`
* `.setAttribute(name, value)`
* `.hasAttribute(name)`
* `.removeAttribute(name)`

### Classes

Element methods:

* `.classList.add(name)`
* `.classList.remove(name)`
* `.classList.toggle(name)`
* `.classList.contains(name)`

~~~ {.javascript insert="../../../src/examples/js/dom.js" token="class-toggle"}
~~~

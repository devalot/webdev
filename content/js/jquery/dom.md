## DOM Manipulation with jQuery

### Fetching Elements with jQuery

~~~ {.javascript insert="../../../src/www/js/frameworks/jquery/example.js" token="fetch"}
~~~

  * When the `$` function is given a CSS selector as its argument, it
    returns a jQuery object holding all of the matching elements.

  * When given a DOM node, the `$` function wraps it into a jQuery
    object.

  * The `text` and `html` functions act like `textContent` and
    `innerHTML` respectively.

### Creating New Elements

~~~ {.javascript insert="../../../src/www/js/frameworks/jquery/example.js" token="create"}
~~~

  * When the `$` function is given an HTML fragment it turns it into a
    node and wraps it into a jQuery object.

  * `appendTo` is similar to `appendChild` except the receiver is the
    node to add, and the first argument is the parent.

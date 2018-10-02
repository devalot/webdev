Partial Function Application and Currying
-----------------------------------------

### Introduction to Partial Function Application ### {#partial-intro}

  * What happens when you call a function with fewer arguments than it
    was defined to take?

  * Sometimes it's useful to provide fewer arguments and get back a
    function that accepts the remaining functions.

### Simple Example Using Haskell ### {#partial-haskell}

~~~ {.haskell insert="../../../src/examples/js/partial.hs"}
~~~

### Example Using the `bind` Method ### {#partial-bind}

~~~ {.javascript insert="../../../src/examples/js/partial.js" token="example"}
~~~

### Exercise: Better Partial Functions {#partial-exercise}

Write a `Function.prototype.curry` function that let's the following
code work:

~~~ {.javascript insert="../../../src/www/js/partial/partial.spec.js" token="obj.add"}
~~~
~~~ {.javascript insert="../../../src/www/js/partial/partial.spec.js" token="add10"}
~~~

  - Use the following file: `src/www/js/partial/partial.js`

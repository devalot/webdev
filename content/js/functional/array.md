## Functional Programming with Arrays

### Introducing Higher-order Functions ### {#foreach}

The `forEach` function is a good example of a *higer-order*
function:

~~~ {.javascript}
let a = [1, 2, 3];

a.forEach(function(val, index, array) {
  // Do something...
});
~~~

Or, less idiomatic:

~~~ {.javascript}
let f = function(val) { /* ... */ };
a.forEach(f);
~~~

### Array Testing ### {#every-some}

  - Test if a function returns `true` on all elements:

    ~~~ {.javascript}
    let a = [1, 2, 3];

    a.every(function(val) {
      return val > 0;
    });
    ~~~

  - Test if a function returns `true` at least once:

    ~~~ {.javascript}
    a.some(function(val) {
      return val > 2;
    });
    ~~~

### Filtering an Array with a Predicate Function ###

![](../../../diagrams/js/filter.dot)\
<!-- Placeholder -->

### Filter Example ### {#filter-example}

~~~ {.javascript insert="../../../src/examples/js/filter.js" token="simple"}
~~~

(See: `src/examples/js/filter.js`)

### Mapping a Function Over an Array

![](../../../diagrams/js/map.dot)\
<!-- Placeholder -->

### Map Example ### {#map-example}

~~~ {.javascript insert="../../../src/examples/js/map.js" token="simple"}
~~~

(See: `src/examples/js/map.js`)

### Example: Folding an Array with `reduce` ### {#reduce-example}

~~~ {.javascript insert="../../../src/examples/js/reduce.js" token="sum"}
~~~

(See: `src/examples/js/reduce.js`)

### Exercise: Arrays and Functional Programming

  #. Open the following file:

        src/www/js/array/array.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

Hint: Use <https://developer.mozilla.org/> for documentation.

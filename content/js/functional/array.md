## Functional Programming with Arrays

### Introducing Higher-order Functions ### {#foreach}

The `forEach` function is a good example of a *higer-order*
function:

~~~ {.javascript}
var a = [1, 2, 3];

a.forEach(function(val, index, array) {
  // Do something...
});
~~~

Or, less idiomatic:

~~~ {.javascript}
var f = function(val) { /* ... */ };
a.forEach(f);
~~~

### Array Testing ### {#every-some}

  - Test if a function returns `true` on all elements:

    ~~~ {.javascript}
    var a = [1, 2, 3];

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

### Higher-order Array Functions

  - `a.filter(f);`: New array filtered with a predicate `f`
  - `a.map(f);`: New array after transforming with `f`
  - `a.reduce(f);`: **Fold** an array into something else using `f`

### Filtering an Array with a Predicate Function

![](../../../diagrams/js/filter.dot)\
<!-- Placeholder -->

### Mapping a Function Over an Array

![](../../../diagrams/js/map.dot)\
<!-- Placeholder -->

### Example: Folding an Array with `reduce`

~~~ {.javascript}
var a = [1, 2, 3];

// Sum numbers in `a'.
var sum = a.reduce(function(acc, elm) {
  // 1. `acc' is the accumulator
  // 2. `elm' is the current element
  // 3. You must return a new accumulator
  return acc + elm;
}, 0);
~~~

### Exercise: Arrays and Functional Programming

  #. Open the following file:

        src/www/js/array/array.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

Hint: Use <https://developer.mozilla.org/> for documentation.

# JavaScript Review (Warming Up)

## Core Concepts and Syntax

### Exercise: Hoisting (Part 1 of 2)

What will the output be?

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="exercise-1"}
~~~

### Answer: Hoisting (Part 1 of 2)

\columnsbegin
\column{.5\textwidth}

This:

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="exercise-1"}
~~~

\column{.5\textwidth}

Turns into:

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="answer-1"}
~~~

\columnsend

### Exercise: Hoisting (Part 2 of 2)

And this one?

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="exercise-2"}
~~~

### Answer: Hoisting (Part 2 of 2)

\columnsbegin
\column{.5\textwidth}

This:

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="exercise-2"}
~~~

\column{.5\textwidth}

Turns into:

~~~ {.javascript insert="../../src/examples/js/hoisting.js" token="answer-2"}
~~~

\columnsend

### Exercise: Variable Scope

What is the scope for `x`, `y`, `z`, and `w`?

~~~ {.javascript}
function foo (x) {
  var y = 0;

  if (x === 1) {
    var z = 1;
    w = x;
  }
}
~~~

### Exercise: What Does this Code Do?

~~~ {.javascript insert="../../src/examples/js/timeoutcl.js" token="timeout"}
~~~

### Exercise: What's Going on Here?

~~~ {.javascript insert="../../src/examples/js/funprop.js"}
~~~

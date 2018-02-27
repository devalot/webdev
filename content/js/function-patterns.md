## Common Patterns Involving Functions

### Anonymous Functions

  - A function expression without a name:

    ~~~ {.javascript}
    var anon = function() {};
    ~~~

  - Pros:
    -   Powerful
    -   Functions can be passed as arguments
    -   Defined inline
  - Cons:
    -   Difficult to test in isolation
    -   Discourages code re-use

### Anonymous Functions (Tips)

  - Name your anonymous functions for debugging

    ~~~ {.javascript insert="../../src/examples/js/named-func.js" token="named"}
    ~~~

  - Name is scoped to the inside of the anonymous function so it can
    refer to itself, easier to debug; errors reference the function
    name

### Functions as Callbacks

  - When a function is provided as an argument as something to be
    invoked inline, or under specific circumstances (like an event):

    ~~~ {.javascript}
    function runCallback(callback) {
      // does things
      return callback();
    }
    ~~~

  - Functions that take functions as arguments are called
    *higher-order* functions.

### Functions as Timers

  - Establish delay for function invocation:

    ~~~ {.javascript}
    // setTimeout(func, delayInMs[, arg1, argn]);
    var timer = setTimeout(func, 500);
    ~~~

  - Use `clearTimeout(timer)` to cancel

  - Establish an interval for periodic invocation

    ~~~ {.javascript}
    setInterval(func, ms);
    clearInterval(timer);
    ~~~

## Variable Hoisting

### `var` Hoisting

* `var` declarations are lifted to the top of scope
* Assignment happens separately

### Exercise: Hoisting

What gets printed out?

~~~ {.javascript insert="../../../src/examples/js/hoisting.js" token="exercise-1"}
~~~

### Answer: Hoisting

\columnsbegin
\column{.5\textwidth}

This:

~~~ {.javascript insert="../../../src/examples/js/hoisting.js" token="exercise-1"}
~~~

\column{.5\textwidth}

Turns into:

~~~ {.javascript insert="../../../src/examples/js/hoisting.js" token="answer-1"}
~~~

\columnsend

### `function` Hoisting

`function` statements are also hoisted, along with their declaration.

~~~ {.javascript insert="../../../src/examples/js/hoisting.js" token="function-hoisting"}
~~~

### Good To Know, But...

* The JS community moved away from leveraging hoisting behavior. It's unexpected and confusing.
* Just use `const` / `let` and the problem goes away.

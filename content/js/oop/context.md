## Scope and Context

### Adding Context to a Scope

  - We already discussed **scope**
    -   Determines visibility of variables
    -   Lexical scope (location in source code)

  - There is also **context**
    -   Refers to the location a function was invoked
    -   Dynamic, defined at runtime
    -   Context is accessible as the `this` variable

### Context Example ### {#example-this}

~~~ {.javascript insert="../../../src/examples/js/this.js"}
~~~

### Context and the `this` Keyword

  - The `this` keyword is a reference to "the object of invocation"

  - Bound at invocation (depends on the call site)

  - Allows a method to reference the "current" object

  - A single function can then service multiple objects

  - Central to prototypical inheritance in JavaScript

### How JavaScript Sets the `this` Variable

  - Resides in the global binding

  - Inner functions do not capture parent's `this` (there are several
    workarounds such as `var self = this;`, `bind`, and ES2015 arrow
    functions)

  - The `this` object can be set manually! (Take a look at the `call`,
    `apply`, and `bind` functions.)

Function Parameters
-------------------

### Special Function Variables ###

Functions have access to two special variables:

  - `arguments`: An object that encapsulates all function arguments
  - `this`: The object the function was called through

### Rules for Using the `arguments` Variable ###

  - Access all arguments, even unnamed ones

  - Array-like, but not an actual array

  - Only has `length` property

  - Should be treated as read-only (never modify!)

  - To treat like an array, convert it to one

  - Best to just use ES2015 *rest* parameters

~~~ {.javascript}
let args = Array.prototype.slice.call(arguments);
~~~

*or*, with ES2015:

~~~ {.javascript}
let args = Array.from(arguments);
~~~

### Function Arity ### {#arity}

A function's *arity* is the number of arguments it expects.  In
JavaScript you can access a function's arity with its `length`
property:

~~~ {.javascript insert="../../../src/examples/js/arity.js"}
~~~

<<(../changes/es2015-features.md#params-default)
<<(../changes/es2015-features.md#params-rest)

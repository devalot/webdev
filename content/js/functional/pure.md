### What is a *Pure* Function? ###

Pure functions are functions that have the same properties as their
mathematical cousins.  Some of these properties include:

  * Can only access bound variables (i.e., their arguments)

  * Cannot have side effects (e.g., update the DOM)

  * Given the same inputs, always produces the same output

In other words, a pure function always produces a return value and
that return value can only be calculated using the function's
arguments.

### What's the Point of Pure Functions? ###

Pure functions make programming *a lot* easier!

  * Everything you need to know about a function is there in its
    definition

  * They don't rely on the state of the program, user, or machine

  * Simple to test (can even be automated)

### Writing Pure Functions in JavaScript ###

Like everything in JavaScript, you get little help from the language
when trying to write pure functions.  Here are some tips:

  * Don't access global or closure variables

  * Don't mutate any arguments or call functions that mutate arguments

  * Don't change the state of the program or runtime

### Pure Function Quiz: Part 1 ###

~~~ {.javascript insert="../../../src/examples/js/pure.js" token="cache"}
~~~

### Pure Function Quiz: Part 2 ###

~~~ {.javascript insert="../../../src/examples/js/pure.js" token="helper"}
~~~

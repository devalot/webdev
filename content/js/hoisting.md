Variable Scope
--------------

### Variable Scope

  - **Scope** refers to how long a variable is alive and what code can
    see it

  - There are basically two types of scope: **global** and **local**

  - Functions are the only way to create a new local scope (with a few
    exceptions)

  - If you don't use `var` then variables are **global**

### Example: Identify the Scope For Each Variable {#a706548258211e8a1a73f1bc7dcefa25}

~~~ {.javascript insert="../../src/examples/js/three-scopes.js" token="foo"}
~~~

<div class="notes">

  - Three scopes exists in the above example

  - Variables `a` and `d` are global

  - There are two independent local variables named `c`

  - Variables `b`, `e`, and `f` are local to their respective functions

  - Each inner scope has access to the outer, but the outer scopes
    cannot access the inner ones

  - `ReferenceError` indicates that a variable wasn't found in the
    current scope chain

</div>

### Scope Tips

  - Avoid using (and polluting) the global scope

  - Use scoping to create namespaces (modules) your code

  - You can "hide" things by wrapping them in a function

  - Closures are born out of using lexical scope

  - We’ll see more of this later...

  - No block scope

Variable Hoisting {#a5d15bd6258111e8a686cf157ebd8e95}
-----------------------------------------------------

When using the `var` keyword, only functions can introduce a new
variable scope.  This leads to something known as hoisting.

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

### Explanation of Hoisting

  - Hoisting refers to when a variable declaration is lifted and moved
    to the top of its scope (only the declaration, not the assignment)

  - Function statements are hoisted too, so you can use them before
    actual declaration

  - JavaScript essentially breaks a variable declaration into two
    statements:

    ~~~ {.javascript}
    var x=0, y;

    // Is interpreted as:
    var x=undefined, y=undefined;
    x=0;
    ~~~

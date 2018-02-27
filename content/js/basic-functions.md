## Functions

### Introduction to Functions

  - "The best part of JavaScript"

  - Functions are used to implement **many** features in JS:
    - Classes, constructors, and methods
    - Modules, namespaces, and closures
    - And a whole bunch of other stuff

### Defining a Function

There are several ways of defining functions:

  - Function statements (named functions)
  - Function expression (anonymous functions)
  - Arrow functions (new in ES2015)

### Function Definition (Statement)

~~~ {.javascript}
function add(a, b) {
  return a + b;
}

var result = add(1, 2); // 3
~~~

  - This syntax is know as a **function definition statement**. It is
    only allowed where statements are allowed. This is when the
    distinction between statements and expressions becomes important.

  - Most of the time you should use the expression form of function
    definition.

### Function Definition (Expression)

~~~ {.javascript}
var add = function(a, b) {
  return a + b;
};

var result = add(1, 2); // 3
~~~

  - Function is callable through a variable
  - Name after `function` is optional
  - We'll see it used later

### Function Invocation

  - Parentheses are mandatory in JavaScript for function invocation

  - Any number of arguments can be passed, regardless of the number
    defined

  - Extra arguments won't be bound to a name

  - Missing arguments will be `undefined`

### Function Invocation (Example)

~~~ {.javascript}
var add = function(a, b) {
  return a + b;
};

add(1)       // a is 1, b is undefined
add(1, 2)    // a is 1, b is 2
add(1, 2, 3) // No name for 3.
~~~

### Function Invocation and Parentheses

~~~ {.javascript}
var add = function(a, b) {return a + b;};

var x = add;       // x is now a function object
x(1, 2);           // Same as add(1, 2);

var y = add(1, 2); // y is 3
~~~

### Functions that Return a Value

In order for a function to return a value to its caller, it must use the
`return` keyword.

~~~ {.javascript}
var add = function(a, b) {
  // WRONG!  Computes a sum then throws it away.
  a + b;
};
~~~

vs.

~~~ {.javascript}
var add = function(a, b) {
  return a + b; // CORRECT!
};
~~~

### Be Careful with Your Line Breaks

\columnsbegin
\column{.5\textwidth}

This:

~~~ {.javascript insert="../../src/examples/js/line.js" token="bad"}
~~~

\column{.5\textwidth}

Turns into:

~~~ {.javascript insert="../../src/examples/js/line.js" token="rewrite"}
~~~

\columnsend

Instead, write:

~~~ {.javascript insert="../../src/examples/js/line.js" token="good"}
~~~

### Special Function Variables

Functions have access to two special variables:

  - `arguments`: An object that encapsulates all function arguments
  - `this`: The object the function was called through

### Rules for Using the `arguments` Variable

  - Access all arguments, even unnamed ones

  - Array-like, but not an actual array

  - Only has `length` property

  - Should be treated as read-only (never modify!)

  - To treat like an array, convert it to one

~~~ {.javascript}
var arr = Array.prototype.slice.call(arguments);
~~~

*or*, slightly more popular (but wasteful):

~~~ {.javascript}
var arr = [].slice.call(arguments);
~~~

*or*, with ES6:

~~~ {.javascript}
var args = Array.from(arguments);
~~~

### Built-in Functions (Types and Conversions)

`isNaN(num)`:
  ~ Safely test if `num` is `NaN`

`isFinite(num)`:
  ~ Test if `num` is **not** `NaN` or `Infinity`

`parseInt(str)`:
  ~ Convert a string to a number (integer)

`parseFloat(str)`:
  ~ Convert a string to a number (float)

### Exercise: Function Arguments and Parsing

  #. Open the following file:

        src/www/js/parse/parse.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

### Variable Scope

  - **Scope** refers to how long a variable is alive and what code can
    see it

  - There are basically two types of scope: **global** and **local**

  - Functions are the only way to create a new local scope (with a few
    exceptions)

  - If you don't use `var` then variables are **global**

### Example: Identify the Scope For Each Variable

~~~ {.javascript insert="../../src/examples/js/three-scopes.js"}
~~~

<div class="notes">

  - Three scopes exists in the above example

  - Variables `a` and `d` are global

  - There are two independent local variables named `c`

  - Variable `bar` is a local variable containing a function

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

### Functions Recap

  - Can be defined with a name or anonymously

  - Are first class objects

  - Create their own scope

  - Declare variables at the top of the function to avoid hoisting

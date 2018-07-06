# Advanced Features of JavaScript Functions

## JavaScript Modules

### Modules, Namespaces, and Packages

  * Organize logical units of functionality

  * Prevent namespace clutter and collisions

  * Several options for module implementation

    - The module pattern
    - CommonJS modules
    - ECMAScript 6th Edition modules

### The Module Pattern

  * Allows for private methods and functions

  * Useful for creating namespaces

  * Uses an anonymous closure to hide private functionality and make a
    public interface

### Immediately-Invoked Function Expressions: Basics ### {#iife-short}

Using functions to create new scopes/namespaces:

~~~ {.javascript insert="../../src/examples/js/iife.js" token="short"}
~~~

### Immediately-Invoked Function Expressions: Expanded ### {#iife-expanded}

~~~ {.javascript insert="../../src/examples/js/iife.js" token="long"}
~~~

### Example: Module Pattern ### {#iife-modules}

~~~ {.javascript include="../../src/examples/js/module.js"}
~~~

### Exercise: Using IIFEs to Make Private Functions ###

  #. Open the following file:

        src/www/js/hosts/hosts.js

  #. Follow the instructions inside the file

  #. Open the `index.html` file for the tests

## Accessing All Function Arguments

### The `arguments` Variable

  * Array-like interface.  But not exactly an array:

    ~~~ {.javascript}
    arguments.length;  // Some number.
    arguments[0];      // First argument.
    arguments.forEach; // undefined :(
    ~~~

### Converting `arguments` into an Array

Converting the `arguments` property into an array isn't as straight
forward as it should be.  The following code is a common idiom:

~~~ {.javascript}
var args = Array.prototype.slice.call(arguments);
~~~

*or*, with ES2015:

~~~ {.javascript}
var args = Array.from(arguments);
~~~

### Function Arity ### {#arity}

A function's *arity* is the number of arguments it expects.  In
JavaScript you can access a function's arity with its `length`
property:

~~~ {.javascript insert="../../src/examples/js/arity.js"}
~~~

## Overriding `this` at Invocation

### `Function.prototype.call` ### {#call}

Calling a function and explicitly setting `this`:

~~~ {.javascript insert="../../src/examples/js/call.js"}
~~~

### `Function.prototype.apply` ### {#apply}

The `apply` method is similar to `call` except that additional
arguments are given with an array:

~~~ {.javascript insert="../../src/examples/js/apply.js"}
~~~

### `Function.prototype.bind` ### {#bind}

The `bind` method creates a new function which ensures your original
function is always invoked with `this` set as you desire, as well as
any arguments you want to supply:

~~~ {.javascript insert="../../src/examples/js/bind.js" token="simple"}
~~~

<div class="notes">

A common use of the `bind` function is to ensure that `this` is set
correctly when using a function as a callback.  For example:

~~~ {.javascript insert="../../src/examples/js/bind.js" token="callback"}
~~~

</div>

## Partial Function Application

### Introduction to Partial Function Application ### {#partial-intro}

  * What happens when you call a function with fewer arguments than it
    was defined to take?

  * Sometimes it's useful to provide fewer arguments and get back a
    function that accepts the remaining functions.

### Simple Example Using Haskell ### {#partial-haskell}

~~~ {.haskell insert="../../src/examples/js/partial.hs"}
~~~

### Example Using the `bind` Method ### {#partial-bind}

~~~ {.javascript insert="../../src/examples/js/partial.js" token="example"}
~~~

### Exercise: Better Partial Functions {#partial-exercise}

Write a `Function.prototype.curry` function that let's the following
code work:

~~~ {.javascript insert="../../src/www/js/partial/partial.spec.js" token="obj.add"}
~~~
~~~ {.javascript insert="../../src/www/js/partial/partial.spec.js" token="add10"}
~~~

  - Use the following file: `src/www/js/partial/partial.js`

## Lazy Function Definition

### What's Wrong with This  Code?

Assuming this function is called millions of times:

~~~ {.javascript insert="../../src/examples/js/lazydef.js" token="slow"}
~~~

### Lazy Function Definitions to the Rescue

~~~ {.javascript insert="../../src/examples/js/lazydef.js" token="fixed"}
~~~

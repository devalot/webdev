# Defining and Invoking Functions

<div class="slides-only">

## Defining and Invoking Functions

### Defining and Invoking Functions

Let's talk about advanced features of functions:

  * Accessing All Function Arguments
  * Overriding `this` at Invocation
  * Immediately-Invoked Function Expressions
  * Partial Function Application
  * Lazy Function Definition

</div>

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

*or*, with ES6:

~~~ {.javascript}
var args = Array.from(arguments);
~~~

## Overriding `this` at Invocation

### `Function.prototype.call`

Calling a function and explicitly setting `this`:

~~~ {.javascript insert="../../src/examples/js/call.js"}
~~~

### `Function.prototype.apply`

The `apply` method is similar to `call` except that additional
arguments are given with an array:

~~~ {.javascript insert="../../src/examples/js/apply.js"}
~~~

### `Function.prototype.bind`

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

### Example: Module Pattern

~~~ {.javascript include="../../src/examples/js/module.js"}
~~~

## Immediately-Invoked Function Expressions (IIFE)

### Immediately-Invoked Function Expressions: Basics

~~~ {.javascript insert="../../src/examples/js/iife.js" token="short"}
~~~

### Immediately-Invoked Function Expressions: Expanded

~~~ {.javascript insert="../../src/examples/js/iife.js" token="long"}
~~~

### Uses of IIFEs

  * Define namespaces/modules/packages.

  * Create a scope for private variables/functions.

### Private Variables via IIFE

~~~ {.javascript insert="../../src/examples/js/iife.js" token="private"}
~~~

### Exercise: Using IIFEs to Make Private Functions

  #. Open the following file:

        www/hosts/hosts.js

  #. Follow the instructions inside the file.

  #. Get the tests to pass:

        node bin/jasmine spec/hosts.spec.js

## Function Chaining

### Calling Methods on Return Values

~~~ {.javascript insert="../../src/examples/js/chaining.js" token="string"}
~~~

### Methods that Return `this`

~~~ {.javascript insert="../../src/examples/js/chaining.js" token="this"}
~~~

## Partial Function Application

### Introduction to Partial Function Application

  * What happens when you call a function with fewer arguments than it
    was defined to take?

  * Sometimes it's useful to provide fewer arguments and get back a
    function that accepts the remaining functions.

### Simple Example Using Haskell

~~~ {.haskell insert="../../src/examples/js/partial.hs"}
~~~

### Example Using the `bind` Method

~~~ {.javascript insert="../../src/examples/js/partial.js" token="example"}
~~~

### Exercise: Better Partial Functions {#A3fb265fc145611e5a608e3c31be73765}

Write a `Function.prototype.partial` function that let's the following
code work:

~~~ {.javascript insert="../../src/spec/partial.spec.js" token="obj.add"}
~~~
~~~ {.javascript insert="../../src/spec/partial.spec.js" token="add10"}
~~~

  - Use the following file: `www/partial/partial.js`
  - Test with: `node bin/jasmine spec/partial.spec.js`

<div class="notes">

[Solution](#A9ce43ba0145711e59d49ef5d2850e438)

</div>

## Lazy Function Definition

### What's Wrong with This  Code?

Assuming this function is called millions of times:

~~~ {.javascript insert="../../src/examples/js/lazydef.js" token="slow"}
~~~

### Lazy Function Definitions to the Rescue

~~~ {.javascript insert="../../src/examples/js/lazydef.js" token="fixed"}
~~~

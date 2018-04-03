# ECMAScript 6th Edition (ES6/ES2015)

ECMAScript 6 was ratified in June of 2015.

Let's look at a few of the major changes in ES6.  For a more complete
list, take a look at the [es6features] [] repository on GitHub.

[es6features]: https://github.com/lukehoban/es6features

Lexical (Block-level) Scopes
----------------------------

### The New `let` Keyword ###

  * ES6 introduces `let`

  * Declare a variable in the scope of containing block:

    ~~~ {.javascript}
    if (expression) {
      var a = 1; // scoped to wrapping function
      let b = 2; // scoped to the block
    } // Woah!
    ~~~

### Hoisting and `let` ###

It does not hoist!

``` {.javascript}
{
  console.log(b); // Error!

  let b = 12;
  console.log(b); // No problem.
}
```

### Looping with `let` ###

Using let with a for loop is possible in ES6:

``` {.javascript}
for (let i=0; i<10; i++) {
  // i is bound to a new scope each iteration
  // getting its value reassigned
  // at the end of the iteration
}
```

Single Assignment Protection
----------------------------

### Preventing Reassignment ###

The `const` keyword defines a block-level variable that must be
initialized when it's declared and can't be reassigned:

~~~ {.javascript}
var f = function() {
  const x = "foo";

  // ...

  x = 1;  // Ignored.
};
~~~

Functions
---------

### Arrow Functions ###

~~~ {.javascript}
element.addEventListener("click", function(e) {
  // ...
});

// Becomes:


element.addEventListener("click", e => {
  // ...
});
~~~

### Implicit `return` for Arrow Expressions ###

If you omit curly braces you can write a single expression that
automatically becomes the return value of the function:

~~~ {.javascript}
a.map(function(e) {
  return e + 1;
});

// Becomes:

a.map(e => e + 1);
~~~

### Arrow Warnings ###

  * Arrow function do not have a `this` or an `arguments` variable!

  * If you use curly braces you need to use `return`.

### Default Parameters ###

~~~ {.javascript insert="../../src/babel/es6/parameters.js" token="default"}
~~~
~~~ {.javascript exec="node ../../src/babel/es6/parameters.js | grep add"}
~~~

  * Parameters can have *default* values

  * When a parameter isn't bound by an argument it takes on the
    default value, or `undefined` if no default is set

  * Default parameters are evaluated at *call time*

  * May refer to any other variables in scope

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

</div>

### Rest Parameters

~~~ {.javascript insert="../../src/babel/es6/parameters.js" token="rest"}
~~~
~~~ {.javascript exec="node ../../src/babel/es6/parameters.js | grep last"}
~~~

  * When an argument name is prefixed with "`...`" it will be an array
    containing all of the arguments that are not bound to names

  * Unlike `arguments`, the rest parameter only contains arguments
    that are not bound to names

  * Unlike `arguments`, the rest parameter is a real `Array`

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

</div>

### Spread Syntax

~~~ {.javascript insert="../../src/babel/es6/parameters.js" token="spread"}
~~~
~~~ {.javascript exec="node ../../src/babel/es6/parameters.js | grep max"}
~~~

  * When the name of an array is prefixed with "`...`" in an
    expression that expects arguments or elements, the array is
    expanded

  * Works when calling functions and creating array literals

  * Can be used to splice arrays together

(Object spreading is part of ES2018.)

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

</div>

### Array Destructuring

~~~ {.javascript insert="../../src/babel/es6/destructuring.js" token="array"}
~~~
~~~ {.javascript exec="node ../../src/babel/es6/destructuring.js"}
~~~

  * Similar to *pattern matching* from functional languages
  
  * The *lvalue* can be an array of names to bind from the *rvalue*

(Object destructuring is part of ES2018.)

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</div>

Object-oriented Programming
---------------------------

### Classes

New `class` keyword that provides syntactic sugar over prototypal
inheritance:

~~~ {.javascript}
class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
  someMethod() {
    return "Interesting";
  }
}
~~~

### Class Features

  * Class statements are *not* hoisted.

  * Classes can also be defined using an expression syntax:

    ~~~ {.javascript}
    var Person = class {
      // ..
    };
    ~~~

### Same-Value Equality {#x4588a4c36ca11e8bffa276babc0cbbb}

Similar to "`===`" with a few small changes:

~~~ {.javascript}
Object.is(NaN, NaN); // true

Object.is(+0, -0);   // false
~~~

(This function first appeared in ECMAScript Edition 6, 2015.)

### The `Object.assign` Function {#o68acf4e36cb11e8a63ff768f96bc38a}

Copies properties from one object to another:

~~~ {.javascript insert="../../src/babel/es6/assign.js"}
~~~

Produces this output:

~~~ {.javascript exec="node ../../src/babel/es6/assign.js"}
~~~

(This function first appeared in ECMAScript Edition 6, 2015.)


### Modules

  * Export identifiers from a library:

    ~~~ {.javascript insert="../../src/babel/es6/module.js"}
    ~~~

  * Import those identifiers elsewhere:

    ~~~ {.javascript insert="../../src/babel/es6/import.js"}
    ~~~

## Generators and Iterators

### New Generic `for` Loop

The new `for...of` loop can work with any object that supports
iteration:

~~~ {.javascript insert="../../src/babel/es6/forof.js"}
~~~

### Generators

~~~ {.javascript insert="../../src/babel/es6/generator.js"}
~~~

### Iterators

~~~ {.javascript insert="../../src/babel/es6/iterator.js"}
~~~

## New Data Types

### Maps

~~~ {.javascript insert="../../src/babel/es6/map.js"}
~~~

### WeakMaps

  * Like a `Map`, but *keys* can be garbage collected

  * Similar API as a `Map` (missing some functions)

    - `WeakMap.prototype.delete`
    - `WeakMap.prototype.get`
    - `WeakMap.prototype.set`
    - `WeakMap.prototype.has`

### Others

  * `Set` and `WeekSet`

     Mathematical sets, as well as a weak version.

  * `Proxy` and `Reflect`

    Powerful objects for metaprogramming.

  * `Symbol`

    Create and use runtime unique entries in the symbol table.

  * Template Literals

    String interpolation:

    ~~~ {.javascript}
    `Hello ${name}`
    ~~~

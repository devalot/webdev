# ECMAScript 6th Edition (ES6/ES2015)

ECMAScript 6 was ratified in June of 2015.

Let's look at a few of the major changes in ES6.  For a more complete
list, take a look at the [es6features] [] repository on GitHub.

[es6features]: https://github.com/lukehoban/es6features

## Lexical (Block-level) Scopes

### The New `let` Keyword

  * ES6 introduces `let`

  * Declare a variable in the scope of containing block:

    ~~~ {.javascript}
    if (expression) {
      var a = 1; // scoped to wrapping function
      let b = 2; // scoped to the block
    } // Woah!
    ~~~

### Hoisting and `let`

It does not hoist!

``` {.javascript}
{
  console.log(b); // Error!

  let b = 12;
  console.log(b); // No problem.
}
```

### Looping with `let`

Using let with a for loop is possible in ES6:

``` {.javascript}
for (let i=0; i<10; i++) {
  // i is bound to a new scope each iteration
  // getting its value reassigned
  // at the end of the iteration
}
```

## Single Assignment Protection

### Preventing Reassignment

The `const` keyword defines a block-level variable that must be
initialized when it's declared and can't be reassigned:

~~~ {.javascript}
var f = function() {
  const x = "foo";

  // ...

  x = 1;  // Ignored.
};
~~~

## Functions

### Arrow Functions

~~~ {.javascript}
element.addEventListener("click", function(e) {
  // ...
});

// Becomes:


element.addEventListener("click", e => {
  // ...
});
~~~

### Implicit `return` for Arrow Expressions

If you omit curly braces you can write a single expression that
automatically becomes the return value of the function:

~~~ {.javascript}
a.map(function(e) {
  return e + 1;
});

// Becomes:

a.map(e => e + 1);
~~~

### Arrow Warnings

  * Arrow function do not have a `this` or an `arguments` variable!

  * If you use curly braces you need to use `return`.

## Object-oriented Programming

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

### ES2015 Summary ###

  * New keywords: `let`, `const`, `class`, `import`, `exprort`, etc.

  * New function syntax (i.e. arrow functions)

  * New syntax for function parameters

  * New syntax for destructuring

  * New built-in objects

  * Lots more

### The New `let` Keyword ###

  * ES2015 introduces `let`

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

Using let with a for loop is possible in ES2015:

``` {.javascript}
for (let i=0; i<10; i++) {
  // i is bound to a new scope each iteration
  // getting its value reassigned
  // at the end of the iteration
}
```

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

### Default Parameters {#params-default} ###

~~~ {.javascript insert="../../../src/babel/es2015/parameters.js" token="default"}
~~~
~~~ {.javascript exec="node ../../../src/babel/es2015/parameters.js | grep add"}
~~~

  * Parameters can have *default* values

  * When a parameter isn't bound by an argument it takes on the
    default value, or `undefined` if no default is set

  * Default parameters are evaluated at *call time*

  * May refer to any other variables in scope

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

</div>

### Rest Parameters {#params-rest}

~~~ {.javascript insert="../../../src/babel/es2015/parameters.js" token="rest"}
~~~
~~~ {.javascript exec="node ../../../src/babel/es2015/parameters.js | grep last"}
~~~

  * When an argument name is prefixed with "`...`" it will be an array
    containing all of the arguments that are not bound to names

  * Unlike `arguments`, the rest parameter only contains arguments
    that are not bound to names

  * Unlike `arguments`, the rest parameter is a real `Array`

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

</div>

### Spread Syntax {#args-spread} ###

~~~ {.javascript insert="../../../src/babel/es2015/parameters.js" token="spread"}
~~~
~~~ {.javascript exec="node ../../../src/babel/es2015/parameters.js | grep max"}
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

~~~ {.javascript insert="../../../src/babel/es2015/destructuring.js" token="array"}
~~~
~~~ {.javascript exec="node ../../../src/babel/es2015/destructuring.js"}
~~~

  * Similar to *pattern matching* from functional languages

  * The *lvalue* can be an array of names to bind from the *rvalue*

(Object destructuring is part of ES2018.)

<div class="notes">

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</div>

### Classes ### {#class-basic}

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

~~~ {.javascript insert="../../../src/babel/es2015/assign.js"}
~~~

Produces this output:

~~~ {.javascript exec="node ../../../src/babel/es2015/assign.js"}
~~~

(This function first appeared in ECMAScript Edition 6, 2015.)

### Exporting and Importing Identifiers ### {#modules-export}

  * Export identifiers from a library:

    ~~~ {.javascript insert="../../../src/babel/es2015/module.js"}
    ~~~

  * Import those identifiers elsewhere:

    ~~~ {.javascript insert="../../../src/babel/es2015/import.js"}
    ~~~

### Explicit Dependencies in JavaScript ### {#modules-why}

When using ES2015 modules:

  * Dependencies are explicit through imports

  * Removes global namespace pollution

  * You can import part of a library, or the entire thing

  * Strict mode enabled by default

### New Generic `for` Loop

The new `for-of` loop can work with any object that supports
iteration:

~~~ {.javascript insert="../../../src/babel/es2015/forof.js"}
~~~

### Generators

~~~ {.javascript insert="../../../src/babel/es2015/generator.js"}
~~~

### Iterators

~~~ {.javascript insert="../../../src/babel/es2015/iterator.js"}
~~~

### Maps

~~~ {.javascript insert="../../../src/babel/es2015/map.js"}
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

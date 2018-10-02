## Constructor Functions

### Constructor Functions and the `new` Operator

What's going on when you use `new`?

~~~ {.javascript insert="../../../src/examples/js/ctor.js" token="new"}
~~~

### Writing a Constructor Function

~~~ {.javascript insert="../../../src/examples/js/ctor.js" token="ctor"}
~~~

~~~ {.javascript insert="../../../src/examples/js/ctor.js" token="prototype"}
~~~

### The `new` Keyword

~~~ {.javascript insert="../../../src/examples/js/ctor.js" token="new"}
~~~

The `new` operator does the following:

  #. Creates a new, empty object

  #. Sets up inheritance for the object and records which function
     constructed the object.

  #. Calls the function given as its operand, setting `this` to the
     newly created object

### Implementing a Fake `new` Operator

~~~ {.javascript}
var fakeNew = function(func) {
  // Step 1. Create an object with proper inheritance:
  var newObject = Object.create(func.prototype);

  // Step 2. Invoke the constructor:
  func.call(newObject);

  // Step 3. Return the new object:
  return newObject;
};
~~~

<<(../labs.md#constructors)

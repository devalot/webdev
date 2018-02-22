## Common Patterns Involving Functions

### Function Usage Patterns

  - Anonymous Functions

  - Closures

  - Callbacks

<!--  - Chaining -->

### Anonymous Functions

  - A function expression without a name:

    ~~~ {.javascript}
    var anon = function() {};
    ~~~

  - Pros:
    -   Powerful
    -   Functions can be passed as arguments
    -   Defined inline
  - Cons:
    -   Difficult to test in isolation
    -   Discourages code re-use

### Anonymous Functions (Tips)

  - Name your anonymous functions for debugging

    ~~~ {.javascript insert="../../src/examples/js/named-func.js" token="named"}
    ~~~

  - Name is scoped to the inside of the anonymous function so it can
    refer to itself, easier to debug; errors reference the function
    name

### Closures: Basics

  - One of the most important features of JavaScript

  - And often one of the most misunderstood & feared features

  - But, they are all around you in JavaScript

  - Happens automatically when you use function expressions

### Closures: Definitions

  - Bound variable: local variables created with `var` or `let` are
    said to be *bound*.

  - Free variable: Any variable that isn't bound and isn't a global
    variable is called a *free* variable.

  - A function that uses free variables *closes around* them,
    capturing them in a *closure*.

  - A closure is a new scope for free variables.

### Closures: Example

~~~ {.javascript insert="../../src/examples/js/closure.js"}
~~~

### Closures: Practical Example

~~~ {.javascript}
var Foo = function() {

  var privateVar = 42;

  var getter = function() {
    return privateVar;
  };

  return {
    getPrivateVar: getter,
  };

};

var x = Foo();
x.getPrivateVar(); // 42
~~~

### Exercise: Sharing Scope

  #. Open the following file:

        www/closure/closure.js

  #. Complete the exercise.

  #. Run the tests by opening <http://localhost:3000/closure/>

### Functions as Callbacks

  - When a function is provided as an argument as something to be
    invoked inline, or under specific circumstances (like an event):

    ~~~ {.javascript}
    function runCallback(callback) {
      // does things
      return callback();
    }
    ~~~

### Functions as Timers

  - Establish delay for function invocation:

    ~~~ {.javascript}
    // setTimeout(func, delayInMs[, arg1, argn]);
    var timer = setTimeout(func, 500);
    ~~~

  - Use `clearTimeout(timer)` to cancel

  - Establish an interval for periodic invocation

    ~~~ {.javascript}
    setInterval(func, ms);
    clearInterval(timer);
    ~~~

  - Context will always be global for the callbacks:

    <http://jsfiddle.net/mrmorris/s5g2moc6/>

### Callbacks and Closures {#f40ee4fc-46a4-4d83-b121-2b0f101ab9f8}

  - Be careful with function expressions in loops

  - They can have scope issues:

    ~~~ {.javascript}
    // What will this output?
    for (var i=0; i<3; i++) {
      setTimeout(function(){
        console.log(i);
      }, 1000*i);
    }
    console.log("Howdy!");
    ~~~

    <div class="notes">

    [Solution](#dbb58178-52c5-47ff-9078-c8ac2293c36f)

    </div>

### Callbacks and Closures

  - Instead, create an additional scope to maintain state for the inner
    function (expression)

  - Closures save the day:

    <http://jsfiddle.net/devalot/nudkrok8/>

### Function Patterns Recap

  - Mind your scope! (Particularly in callbacks.)

  - Closures create a persistent and private scope

  - Functions are often passed around as callbacks

## Scope and Context

### Adding Context to a Scope

  - We already discussed **scope**
    -   Determines visibility of variables
    -   Lexical scope (location in source code)

  - There is also **context**
    -   Refers to the location a function was invoked
    -   Dynamic, defined at runtime
    -   Context is accessible as the `this` variable

### Context Example

<div class="notes">

The following code can be found at: <http://jsfiddle.net/devalot/x56tss8v/>

</div>

~~~ {.javascript insert="../../src/examples/js/this.js"}
~~~

### Context and the `this` Keyword

  - The `this` keyword is a reference to "the object of invocation"

  - Bound at invocation (depends on the call site)

  - Allows a method to reference the "current" object

  - A single function can then service multiple objects

  - Central to prototypical inheritance in JavaScript

### Constructor Functions and the `new` Operator

What's going on when you use `new`?

~~~ {.javascript insert="../../src/examples/js/ctor.js" token="new"}
~~~

### Writing a Constructor Function

~~~ {.javascript insert="../../src/examples/js/ctor.js" token="ctor"}
~~~

~~~ {.javascript insert="../../src/examples/js/ctor.js" token="prototype"}
~~~

### The `new` Keyword

~~~ {.javascript insert="../../src/examples/js/ctor.js" token="new"}
~~~

The `new` operator does the following:

  #. Creates a new, empty object

  #. Sets up inheritance for the object and records which function
     constructed the object.

  #. Calls the function given as its operand, setting `this` to the
     newly created object

### Implementing Our Own new Operator

~~~ {.javascript}
var fakeNew = function(func) {
  var newObject = Object.create(func.prototype);

  newObject.constructor = func;
  func.call(newObject);

  return newObject;
};
~~~

### Factory Functions (Hand-made Constructors)

~~~ {.javascript insert="../../src/examples/js/factory.js" token="factory"}
~~~

### How JavaScript Sets the `this` Variable

  - Resides in the global binding

  - Inner functions do not capture parent's `this` (there are several
    workarounds such as `var self = this;`, `bind`, and ES6 arrow
    functions)

  - The `this` object can be set manually! (Take a look at the `call`,
    `apply`, and `bind` functions.)

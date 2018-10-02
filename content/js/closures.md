Closures
--------

### Closures: Basics ###

  - One of the most important features of JavaScript

  - And often one of the most misunderstood & feared features

  - But, they are all around you in JavaScript

  - Happens automatically when you nest functions

### Closures: Definitions ###

  - Bound variable: local variables created with `var` or `let` are
    said to be *bound*.

  - Free variable: Any variable that isn't bound and isn't a global
    variable is called a *free* variable.

  - A function that uses free variables *closes around* them,
    capturing them in a *closure*.

  - A closure is a new scope for free variables.

### Demonstrating Closures: An Example ### {#closure-example}

~~~ {.javascript insert="../../src/examples/js/closure.js"}
~~~

(Open `src/examples/js/closure.html` and play in the debugger.)

### A Practical Example of Using Closures: Private Variables ### {#private}

Using closures to create truly private variables in JavaScript:

~~~ {.javascript}
var Foo = function() {
  var privateVar = 42;

  return {
    getPrivateVar: function() {
      return privateVar;
    },
    setPrivateVar: function(n) {
      if (n) privateVar = n;
    }
  };
};

var x = Foo();
x.getPrivateVar(); // 42
~~~

### Exercise: Sharing Scope ### {#closure-exercise}

  #. Open the following file:

        src/www/js/closure/closure.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.


### Closure Gotcha: Loops, Functions, and Closures {#closures-loops}

<div class="notes">

  - Be careful with function expressions in loops

  - They can have scope issues:

</div>

~~~ {.javascript insert="../../src/examples/js/timeoutcl.js" token="timeout"}
~~~

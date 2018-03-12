## Function Closures

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

See: `src/examples/js/closure.html`

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

        src/www/js/closure/closure.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.


### Loops and Closures {#e926298a258211e8abc83b6fee9937e9}

<div class="notes">

  - Be careful with function expressions in loops

  - They can have scope issues:

</div>

~~~ {.javascript insert="../../src/examples/js/timeoutcl.js" token="timeout"}
~~~

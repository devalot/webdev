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


### Loops and Closures {#f40ee4fc-46a4-4d83-b121-2b0f101ab9f8}

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

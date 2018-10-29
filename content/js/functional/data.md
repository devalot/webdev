Function Objects
----------------

### Functions as Data ### {#func-data}

Functions can be treated like any other type of JavaScript value:

~~~ {.javascript}
let add = function(a, b) {return a + b;};

let x = add;       // x is now a function object
x(1, 2);           // Same as add(1, 2);
~~~

### Passing Functions as Arguments ### {#funcs-as-args}

It's very common to create functions *on the fly* and pass them to
other functions as arguments:

~~~ {.javascript}
let a = [1, 2, 3];

a.forEach(function(n) {
  console.log(n);
});
~~~

### Functions that Return Functions ### {#funcs-as-returns}

Functions can create *nested functions* and return them:

~~~ {.javascript}
function recordStartTime() {
  let d = new Date();

  return function() {
    return d;
  };
};

let getStartTime = recordStartTime();
getStartTime(); // 2018-07-03T23:16:00.383Z
~~~

(Note: this creates what's known as a *closure*.)

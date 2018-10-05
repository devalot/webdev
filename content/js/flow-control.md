### Conditional Statements

~~~ {.javascript}
if (expression) { then_part; }

if (expression) {
  then_part;
} else {
  else_part;
}
~~~

### Chaining Conditionals

\columnsbegin
\column{.5\textwidth}

Shorthand:

~~~ {.javascript}
if (expression) {
  then_part;
} else if (expression2) {
  second_then_part;
} else {
  else_part;
}
~~~

\column{.5\textwidth}

Long form:

~~~ {.javascript}
if (expression) {
  then_part;
} else {
  if (expression2) {
    second_then_part;
  } else {
    else_part;
  }
}
~~~

\columnsend

### Switch Statements

Cleaner conditional (using strict equality checking):

~~~ {.javascript}
switch (expression) {
  case val1:
    then_part;
    break;

  case val2:
    then_part;
    break;

  default:
    else_part;
    break;
}
~~~

Don't forget that `break;` statement!

### The Major Looping Statements

  * Traditional `for`:

    ~~~ {.javascript}
    for (let i=0; i<n; ++i) { /* body */ }
    ~~~

  * Traditional `while`:

    ~~~ {.javascript}
    while (condition) { /* body */ }
    ~~~

  * Traditional `do ... while`:

    ~~~ {.javascript}
    do { /* block */ } while (condition)
    ~~~

  * Object Property Version of `for`:

    ~~~ {.javascript}
    for (let prop in object) { /* body */ }
    ~~~

### Traditional for Loops

  - Just like in C:

    ~~~ {.javascript}
    for (let i=0; i<10; ++i) {
      // executes 10 times.
    }
    ~~~

  - Loops can be labeled and exited with `break`.

  - Use `continue` to skip to the next iteration of the loop.

### Traditional while Loops

~~~ {.javascript}
let i=0;

while (i<10) {
  ++i;
}
~~~

### Flipped while Loops

~~~ {.javascript}
let i=0;

do {
  ++i;
} while (i<10);
~~~

### Controlling a Loop

  - Loops can be labeled and exited with `break`.

    ~~~ {.javascript insert="../../src/examples/js/for-loop.js" token="break"}
    ~~~

  - Use `continue` to skip to the next iteration of the loop.

    ~~~ {.javascript insert="../../src/examples/js/for-loop.js" token="continue"}
    ~~~

### The Ternary Conditional Operator

  - JavaScript supports a ternary conditional operator:

    ~~~ {.example}
    condition ? then : else;
    ~~~

  - Example:

    ~~~ {.javascript}
    let isWarm; // Is set to something unknown.
    let shirt = isWarm ? "t-shirt" : "sweater";
    ~~~

### Exercise: Experiment with Control Flow

  #. Open the following file:

        src/www/js/control/control.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

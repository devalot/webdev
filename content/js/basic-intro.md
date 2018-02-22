## Introduction to JavaScript

### Approaching JavaScript

  - JavaScript might be an object-oriented language with "Java" in the
    title, but it's not Java.

  - I find that it's best to approach JavaScript as a functional (yet
    imperative) language with some object-oriented features.

### A Little Bit About JavaScript

  - Standardized as ECMAScript
    - 5th Edition, 2009 (widely supported)
    - 6th Edition, 2015 (not so much)
    - 7th Edition, 2016
    - 8th Edition, 2017

  - Special-purpose language

  - Dynamically typed (with weak typing)

  - Interpreted and single threaded

  - Prototype-base inheritance (vs. class-based)

  - Nothing really to do with Java

  - Weird but fun

### Not a General Purpose Language

  - JavaScript is **not** a general-purpose language

  - There are no functions for reading from or writing to files

  - I/O is heavily restricted

### But, It's Not Just for the Browser

  - Outside of the browser there are libraries that help make JavaScript
    act like a general purpose language.

  - Tools such as Node.js add missing features to JS

  - Weigh the pros and cons of using JS outside the browser

### Why JavaScript?

  - It's the language of the web
  - Runs in the browser, options to run on server
  - Easy to learn partially
  - Harder to learn completely

### JavaScript Syntax Basics

  - Part of the "C" family of languages
  - Whitespace is insignificant (including indentation)
  - Blocks of code are wrapped with curly braces: `{ ... }`
  - Expressions are terminated by a semicolon: `;`
  - [Lexical Structure and Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)

### A Note About Semicolons

  - Semicolons are used to terminate expressions.
  - They are optional in JavaScript.
  - Due to the minification process and other subtle features of the
    language, you should always use semicolons.
  - When in doubt, use a semicolon.

### The Browser's JavaScript Console

  - Open your browser's debugging console:
    - Command-Option-J on a Mac
    - F12 on Windows and Linux

  - Enter the following JavaScript:

    ~~~ {.javascript}
    console.log("Hello World");
    ~~~

### Browser Debugging

  - The browser's "console" is a line interpreter (REPL)

  - All major browsers are converging to the same API for console
    debugging

  - Can use it to set breakpoints

  - Lets you see scoped variables and context

  - Can set a conditional breakpoint

  - `console.log` is equivalent to `printf`

### JavaScript Values

  - Primitive Values:

    ~~~ {.javascript}
      "Hello World"; // Strings
      42;            // Numbers
      true && false; // Boolean
      null;          // No value
      undefined;     // Unset
    ~~~

  - Objects (arrays, functions, etc.)

### Variables in JavaScript

~~~ {.javascript}
  var x;          // undefined
  var y = "Foo";  // String
  var z = 5;      // Number
~~~

### Variable Naming Conventions

  - Use camelCase: `userName`, `partsPerMillion`

  - Allowed: letters, numbers, underscore, and `$`

  - Don't use JavaScript keywords as variable names

  - Always start with a lowercase letter

(All identifiers can be made up of valid Unicode characters.  Don't go
crazy, not all [browsers support this][jsids].  Stick to UTF-8
identifiers.)

[jsids]: https://mathiasbynens.be/notes/javascript-identifiers-es6

### Undefined and Null

  - There are two special values: `null` and `undefined`

  - Variables declared without a value will start with `undefined`

  - Variables intentionally missing a value are set to `null`

### Numbers

  - All numbers are 64bit floating point

  - Integer and decimal (`9` and `9.8` use the same type)

  - Keep an eye on [number precision](http://0.30000000000000004.com/):

    ~~~ {.javascript}
      0.1 + 0.2 == 0.3; // false
    ~~~

  - Special numbers: `NaN` and `Infinity`

    ~~~ {.javascript}
      NaN == NaN; // false
      1 / 0;      // Infinity
    ~~~

### How Do You Deal with Numeric Accuracy?

  - Use a special data type like [Big
    Decimal](https://github.com/dtrebbien/BigDecimal.js).

  - Round to a fixed decimal place with `num.toFixed(2);`

  - Only use integers (e.g., for money, represent as cents)

### Strings

  - Use double or single quotes (no difference between them):

    ~~~ {.javascript}
      "Hello" // Same as...
      'Hello'
    ~~~

  - Typical backslash characters works (e.g., `\n` and `\t`) in both
    types of strings.

  - Operators:

    ~~~ {.javascript}
      "Hello" + " World";  // "Hello World"
      "Lucky " + 21;       // "Lucky 21"
      "Lucky " - 21;       // NaN
      "1" - 1              // 0
    ~~~

### Type Coercion

  - JavaScript is loosely typed

  - Implicit conversion between types as needed

  - Usually in unexpected ways:

    ~~~ {.javascript}
    8 * null; // 0

    null > 0;  // false
    null == 0; // false
    null >= 0; // true
    ~~~

### The Array Object

  - Arrays are objects that behave like traditional arrays

  - Use arrays when order of the data should be sequential

### Creating Arrays

~~~ {.javascript}
  // Array literal:
  var myArray = [1, 2, 3];

  // Using the constructor function:
  var myArray = new Array(1, 2, 3);
~~~

### JavaScript Comments

  - Single-line comments:

    ~~~ {.javascript}
      // Starts with two slashes, runs to end of line.
    ~~~

  - Multiple-line comments:

    ~~~ {.javascript}
      /* Begins with a slash and asterisk.

      Also a comment.

      Ends with a asterisk slash. */
    ~~~

### Exercise: Using Primitive Types

  #. Start the Node.js server:

        node bin/server.js

  #. Open the following file:

        www/primitives/primitives.js

  #. Complete the exercise.

  #. Run the tests by opening <http://localhost:3000/primitives/>

### Objects

  - Built up from the core types

  - A dynamic collection of **properties**:

    ~~~ {.javascript}
      var box = {
        color: "tan",
        height: 12
      };

      box.color;             // Getter method
      box.color = "red";     // Setter method

      var x = "color";
      box[x];          // "red"
      box[x] = "blue"; // Alternative syntax
    ~~~

### Object Basics

  - Everything is an object (almost)

  - Primitive types have object wrappers (except `null` and `undefined`)

  - They remain primitive until used as objects, for performance reasons

  - An object is a dynamic collection of properties

  - Properties can be functions

### Recap: Basic Data Types

  - There are five primitive types:
    1.  String
    2.  Number
    3.  Boolean
    4.  null
    5.  undefined
  - And then there are objects

  - Declare variables with `var`

  - Types are automatically coerced when needed

  - Everything can be represented as an object

### JavaScript Operators

  ------------ ----- ----- ----- ----- ----- ----- -----
    Arithmetic `+`   `-`   `*`   `/`   `%`   `**`
      Shortcut `+=`  `-=`  `*=`  `/=`  `%=`  `**=`
       Inc/Dec `++n` `n++` `--n` `n--`
       Bitwise `~`   `&`   `|`   `^`   `>>`  `<<`  `>>>`
    Comparison `>`   `>=`  `<`   `<=`
      Equality `==`  `!=`  `===` `!==`
         Logic `!`   `&&`  `||`
        Object `.`   `[]`
        String `+`
  ------------ ----- ----- ----- ----- -----

(Most operators have assignment shortcut versions.)

### Sloppy Equality

  - The traditional equality operators in JS are sloppy

  - That is, they do implicit type conversion

~~~ {.javascript}
"1" == 1;   // true
[3] == "3"; // true

0 != "0";  // false
0 != "";   // false
~~~

### Strict Equality

More traditional equality checking can be done with the `===`
operator:

~~~ {.javascript}
"1" === 1;  // false
0 === "";   // false

"1" !== 1;  // true
[0] !== ""; // true
~~~

(This operator first appeared in ECMAScript Edition 3, circa 1999.)

### What Is `true` and What Is `false`?

  - Things that are `false`:

    ~~~ {.javascript insert="../../src/examples/js/bool.js" token="false"}
    ~~~

  - Everything else is `true`, including:

    ~~~ {.javascript insert="../../src/examples/js/bool.js" token="true"}
    ~~~

### Boolean Operators: `&&` (Conjunction)

`a && b` returns either `a` or `b` and short circuits:

~~~ {.javascript insert="../../src/examples/js/bool.js" token="conjunction"}
~~~

### Boolean Operators: `||` (Disjunction)

`a || b` returns either `a` or `b` and short circuits:

~~~ {.javascript insert="../../src/examples/js/bool.js" token="disjunction"}
~~~

### Boolean Operators: !

Boolean negation: `!`:

~~~ {.javascript}
var x = false;
var y = !x; // y is true
~~~

Double negation: `!!`:

~~~ {.javascript}
var n = 1;
var y = !!n; // y is true
~~~

### Exercise: Boolean Operators

  - Experiment with `&&`:

    ~~~ {.javascript}
    0 && console.log("Yep");
    1 && console.log("Yep");
    ~~~

  - Experiment with `||`:

    ~~~ {.javascript}
    0 || console.log("Yep");
    1 || console.log("Yep");
    ~~~

### The Ternary Conditional Operator

  - JavaScript supports a ternary conditional operator:

    ~~~ {.example}
    condition ? then : else;
    ~~~

  - Example:

    ~~~ {.javascript}
    var isWarm; // Is set to something unknown.
    var shirt = isWarm ? "t-shirt" : "sweater";
    ~~~

### Statements and Expressions

  - Expressions compute and returns values

  - Statements are made up of expressions but have no value

  - A program is a list of statements

### Declaring and Initializing Variables

  - Declare variables to make them local:

    ~~~ {.javascript}
    var x;
    ~~~

  - You can initialize them at the same time:

    ~~~ {.javascript}
    var n = 1;

    var x, y=1, z;
    ~~~

  - If you don't declare a variable with `var`, the first time you
    assign to an undefined identifier it will become a global variable.

  - If you don't assign a value to a new variable it will be `undefined`

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
    for (var i=0; i<n; ++i) { /* body */ }
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
    for (var prop in object) { /* body */ }
    ~~~

### Traditional for Loops

  - Just like in C:

    ~~~ {.javascript}
      for (var i=0; i<10; ++i) {
        // executes 10 times.
      }
    ~~~

  - Loops can be labeled and exited with `break`.

  - Use `continue` to skip to the next iteration of the loop.

### Traditional while Loops

~~~ {.javascript}
var i=0;

while (i<10) {
  ++i;
}
~~~

### Flipped while Loops

~~~ {.javascript}
var i=0;

do {
  ++i;
} while (i<10);
~~~

### Controlling a Loop

  - Loops can be labeled and exited with `break`.

  - Use `continue` to skip to the next iteration of the loop.

~~~ {.javascript}
// Rarely used labels.  Try to avoid.
outer:

for (;;) {

  inner:

  for (;;) {
    break outer;
  }
}
~~~

### Control Structures Recap

  - Conditionals like `if` and `if ... else`

  - `switch` statements

  - Looping with `for` and `while`

### Exercise: Experiment with Control Flow

  #. Open the following file:

        www/control/control.js

  #. Complete the exercise.

  #. Run the tests by opening: <http://localhost:3000/control/>

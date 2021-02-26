## Values and Operators

### Primitive Values vs. Objects

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
let x;          // undefined
let y = "Foo";  // String
let z = 5;      // Number
~~~

### Declaring and Initializing Variables

  - Declare variables to make them local:

    ~~~ {.javascript}
    let x;
    ~~~

  - You can initialize them at the same time:

    ~~~ {.javascript}
    let n = 1;

    let x, y=1, z;
    ~~~

  - If you don't declare a variable with `var`, the first time you
    assign to an undefined identifier it will become a global variable.

  - If you don't assign a value to a new variable it will be `undefined`

### Variable Naming Conventions

  - Use camelCase: `userName`, `partsPerMillion`

  - Allowed: letters, numbers, underscore, and `$`

  - Don't use JavaScript keywords as variable names

  - Always start with a lowercase letter

(All identifiers can be made up of valid Unicode characters.  Don't go
crazy, not all [browsers support this][jsids].  Stick to UTF-8
identifiers.)

[jsids]: https://mathiasbynens.be/notes/javascript-identifiers-es6

### `undefined` and `null`

  - There are two special values: `null` and `undefined`

  - Variables declared *without* a value will start with `undefined`

  - Setting a variable to `null` usually indicates "no appropriate value"

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

### Value Coercion

  - JavaScript is loosely typed (uni-typed)

  - Implicit conversion between "types" as needed

  - Usually in unexpected ways:

    ~~~ {.javascript}
    8 * null; // 0

    null > 0;  // false
    null == 0; // false
    null >= 0; // true
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

  #. Open the following file:

        src/www/js/primitives/primitives.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

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

## Equality in JavaScript {#ec9075fc36c911e8bf5bdbeceee344b0}

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

<<(changes/es2015-features.md#x4588a4c36ca11e8bffa276babc0cbbb)

## Boolean Values and Logic Operators

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
let x = false;
let y = !x; // y is true
~~~

Double negation: `!!`:

~~~ {.javascript}
let n = 1;
let y = !!n; // y is true
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

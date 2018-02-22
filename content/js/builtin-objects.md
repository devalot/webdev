# Standard Objects

## Introduction

### Built-in Objects

  - `String`, `Number`, and `Boolean`
  - `Function`
  - `Array`
  - `Date`
  - `Math`
  - `RegExp`
  - `Error`

(Most of these objects are actually constructor functions.)

## The String Object

### The String Object

  - 16 bit unicode characters (UCS-2, not quite UTF-16)

  - Single or double quotes (no difference)

  - Similar strings are `===` equal (checks contents)

  - `>=` ES5 supports multiple line literals using a backslash

### String Properties and Instance (Prototype) Methods

  - `length`
  - `charAt(i);`
  - `concat();`
  - `indexOf(needle);`
  - `slice(iStart, iEnd);`
  - `substr(iStart, length);`
  - `replace(regex|substr, newSubStr|function);`
  - `toLowerCase();`
  - `trim();`

## The Number and Math Object

### The Number Object

  - 64-bit binary floating point based on IEEE-754
  - AKA `double` in Java
  - `102`, `120.00`, `.0000000102`
  - Be careful, decimals are approximate!

~~~ {.javascript}
  var a=0.1, b=0.2, c=0.3;
  (a+b)+c != a+(b+c)
~~~

### The Number Object (functions)

  * Constants:
    - `Number.MAX_VALUE`
    - `Number.NaN`
    - `Number.POSITIVE_INFINITY`
    - etc.

  * Generic Methods:
    - `Number.isInteger(n);`
    - `Number.isFinite(n);`
    - `Number.parseFloat(s);`
    - `Number.parseInt(s);`

  * Prototype Methods:
    - `num.toString();`
    - `num.toFixed();`
    - `num.toExponential();`

### The Math Object

  * Constants:
    - `Math.E`
    - `Math.LOG2E`
    - `Math.PI`
    - etc.
  * Generic Functions:
    - `Math.abs(n);`
    - `Math.pow(n, e);`
    - `Math.sqrt(n);`
    - etc.

## The Date Object

### The Date Object

  - An instance of the Date object is used to represent a point in time

  - Must be constructed:

    ~~~ {.javascript}
    var d = new Date(); // current date
    var d = new Date("Wed, 28 Jan 2015 13:30:00 MST");
    ~~~

  - Months start at 0, days start at 1

  - Timestamps are unix time:

    ~~~ {.javascript}
    d.getTime(); // 1422477000000
    ~~~

### The Date Object (functions)

  * Generic Methods:
    - `Date.now();`
    - `Date.UTC();`
    - `Date.parse("March 7, 2014");`

  * Prototype Methods:

    ~~~ {.javascript}
    var d = new Date();

    d.getMonth();
    d.getHours();
    d.getMinutes();
    d.getFullYear(); // Don't use d.getYear();
    d.setYear(1990);
    ~~~

## The Array Object

### The Array Object

  - Arrays are objects that behave like traditional arrays

  - Use arrays when order of the data should be sequential

### The Array Object (examples)

  * Creating Arrays:

    ~~~ {.javascript}
    // Array literal:
    var myArray = [1, 2, 3];

    // Using the constructor function:
    var myArray = new Array(1, 2, 3);
    ~~~

  * Functions/Methods:

    ~~~ {.javascript}
    var a = [1, 2, 3];
    a.length; // 3
    Array.isArray(a); // true (>= ES5)
    typeof a; // "object" :(
    ~~~

### Array Cheat Sheet

  - Insert:  `a.unshift(x);` **or** `a.push(x);`
  - Remove:  `a.shift();` **or** `a.pop();`
  - Combine: `var b = a.concat([4, 5]);`
  - Extract: `a.slice(...);` **or** `a.splice(...);`
  - Search:  `a.indexOf(x);`
  - Sort:    `a.sort();`

### Array Enumeration

**WARNING**: Use `for`, not `for...in`.  The latter doesn't keep array
keys in order!

~~~ {.javascript}
for (var i=0; i < myArray.length; ++i) {
  // myArray[i]
}
~~~

### The forEach Method

New in ES5:

~~~ {.javascript}
myArray.forEach(function(val, index, arr) {
  // Do something...
});
~~~

### Array Testing

  - Test if a function returns `true` on all elements:

    ~~~ {.javascript}
    var a = [1, 2, 3];

    a.every(function(val) {
      return val > 0;
    });
    ~~~

  - Test if a function returns `true` at least once:

    ~~~ {.javascript}
    a.some(function(val) {
      return val > 2;
    });
    ~~~

### Functional Programming with Arrays

  - `a.filter(f);`: New array filtered with a predicate `f`
  - `a.map(f);`: New array after transforming with `f`
  - `a.reduce(f);`: **Fold** an array into something else using `f`

### Filtering an Array with a Predicate Function

![](../../diagrams/js/filter.dot)\

<!-- Placeholder -->

### Mapping a Function Over an Array

![](../../diagrams/js/map.dot)\

<!-- Placeholder -->

### Example: Folding an Array with `reduce`

~~~ {.javascript}
var a = [1, 2, 3];

// Sum numbers in `a'.
var sum = a.reduce(function(acc, elm) {
  // 1. `acc' is the accumulator
  // 2. `elm' is the current element
  // 3. You must return a new accumulator
  return acc + elm;
}, 0);
~~~

### Exercise: Arrays and Functional Programming

  #. Open the following file:

        www/array/array.js

  #. Complete the exercise.

  #. Run the tests by opening <http://localhost:3000/array/>

Hint: Use <http://devdocs.io/> or <https://developer.mozilla.org/> for
documentation.

<div class="notes">

Bonus [Solution](#db823740-94c9-4c6a-86be-5d29a41813af)

</div>

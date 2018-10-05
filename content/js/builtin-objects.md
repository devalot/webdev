## Builtin Objects

### The String Object

  - 16 bit unicode characters (UCS-2, not quite UTF-16)

  - Single or double quotes (no difference)

  - Similar strings are `===` equal (checks contents)

  - `>=` ES5 supports multiple line literals using a backslash

### String Properties and Instance (Prototype) Methods

  - `str.length`
  - `str.charAt(i);`
  - `str.concat();`
  - `str.indexOf(needle);`
  - `str.slice(iStart, iEnd);`
  - `str.substr(iStart, length);`
  - `str.replace(regex|substr, newSubStr|function);`
  - `str.toLowerCase();`
  - `str.trim();`

### The Number Object

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

### The Date Object

  - An instance of the Date object is used to represent a point in time

  - Must be constructed:

    ~~~ {.javascript}
    let d = new Date(); // current date
    let d = new Date("Wed, 28 Jan 2015 13:30:00 MST");
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
    let d = new Date();

    d.getMonth();
    d.getHours();
    d.getMinutes();
    d.getFullYear(); // Don't use d.getYear();
    d.setYear(1990);
    ~~~

### The Array Object

  - Arrays are objects that behave like traditional arrays

  - Use arrays when order of the data should be sequential

### The Array Object (Examples)

  * Creating Arrays:

    ~~~ {.javascript}
    // Array literal:
    let myArray = [1, 2, 3];

    // Using the constructor function:
    let myArray = new Array(1, 2, 3);
    ~~~

  * Functions/Methods:

    ~~~ {.javascript}
    let a = [1, 2, 3];
    a.length; // 3
    Array.isArray(a); // true (>= ES5)
    typeof a; // "object" :(
    ~~~

### Array Cheat Sheet

  - Insert:  `a.unshift(x);` **or** `a.push(x);`
  - Remove:  `a.shift();` **or** `a.pop();`
  - Combine: `let b = a.concat([4, 5]);`
  - Extract: `a.slice(...);` **or** `a.splice(...);`
  - Search:  `a.indexOf(x);`
  - Sort:    `a.sort();`

### Array Enumeration

**WARNING**: Use `for`, not `for...in`.  The latter doesn't keep array
keys in order!

~~~ {.javascript}
for (let i=0; i < myArray.length; ++i) {
  // myArray[i]
}
~~~

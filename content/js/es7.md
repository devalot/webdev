# ECMAScript 7th Edition (ES7/ES2016)

The 7th edition of ECMAScript contained very few changes and only
introduced two major changes to the language.

## Major Changes

### Exponentiation Operator

Prior to ES7:

~~~ {.javascript}
Math.pow(4, 2);
~~~

New in ES7:

~~~ {.javascript}
4 ** 2;
~~~

### `Array.prototype.includes`

A new prototype function to test if a value is in an array.

Prior to ES7:

~~~ {.javascript}
[1, 2, 3].indexOf(3) >= 0;
~~~

New in ES7:

~~~ {.javascript}
[1, 2, 3].includes(3);
~~~

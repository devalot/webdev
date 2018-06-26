### ES2016 Summary ###

  * New operator: `**`

  * New function: `Array.prototype.includes`

### Exponentiation Operator ###

Prior to ES2016:

~~~ {.javascript}
Math.pow(4, 2);
~~~

New in ES2016:

~~~ {.javascript}
4 ** 2;
~~~

### `Array.prototype.includes` ###

A new prototype function to test if a value is in an array.

Prior to ES2016:

~~~ {.javascript}
[1, 2, 3].indexOf(3) >= 0;
~~~

New in ES2016:

~~~ {.javascript}
[1, 2, 3].includes(3);
~~~

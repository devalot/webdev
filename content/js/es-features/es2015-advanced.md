### New Generic `for` Loop

`for-of` iterates across an `Iterable`

~~~ {.javascript insert="../../../src/examples/es-features/es2015.js" token="for-of"}
~~~

### Same-Value Equality {#x4588a4c36ca11e8bffa276babc0cbbb}

Similar to "`===`" with a few small changes:

~~~ {.javascript}
Object.is(NaN, NaN); // true

Object.is(+0, -0);   // false
~~~

(This function first appeared in ECMAScript Edition 6, 2015.)

### Generators

~~~ {.javascript insert="../../../src/examples/es-features/es2015/generator.js"}
~~~

### Iterators

~~~ {.javascript insert="../../../src/examples/es-features/es2015/iterator.js"}
~~~

### Maps

~~~ {.javascript insert="../../../src/examples/es-features/es2015/map.js"}
~~~

### WeakMaps

  * Like a `Map`, but *keys* can be garbage collected

  * Similar API as a `Map` (missing some functions)

    - `WeakMap.prototype.delete`
    - `WeakMap.prototype.get`
    - `WeakMap.prototype.set`
    - `WeakMap.prototype.has`

### Others

  * `Set` and `WeekSet`

     Mathematical sets, as well as a weak version.

  * `Proxy` and `Reflect`

    Powerful objects for metaprogramming.

  * `Symbol`

    Create and use runtime unique entries in the symbol table.

  * Template Literals

    String interpolation:

    ~~~ {.javascript}
    `Hello ${name}`
    ~~~

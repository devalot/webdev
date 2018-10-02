Constructor Functions and Classes
---------------------------------

### Constructor Functions and OOP ### {#ctor-proto}

~~~ {.javascript insert="../../../src/examples/js/inheritance.js" token="rec"}
~~~

<!-- EXERCISE -->
<<(../labs.md#constructors)

### ES2015 Classes (Hidden Prototypes) ### {#es2015-classes}

~~~ {.javascript insert="../../../src/babel/es2015/class.js" token="rec"}
~~~

~~~ {.javascript insert="../../../src/babel/es2015/class.js" token="rec-new"}
~~~

### Constructor Functions and Inheritance ### {#prototype-inheritance}

~~~ {.javascript insert="../../../src/examples/js/inheritance.js" token="sq"}
~~~

### ES2015 Classes and Inheritance ### {#es2015-inheritance}

~~~ {.javascript insert="../../../src/babel/es2015/class.js" token="sq"}
~~~

~~~ {.javascript insert="../../../src/babel/es2015/class.js" token="sq-new"}
~~~

### Generic Functions (Static Class Methods) ### {#generic-functions}

Functions that are defined as properties of the constructor function
are known as *generic* functions:

~~~ {.javascript insert="../../../src/examples/js/inheritance.js" token="generic"}
~~~

### ES2015 Static Class Methods ### {#es2015-static}

~~~ {.javascript insert="../../../src/babel/es2015/class-static.js" token="static"}
~~~

### Property Descriptors ###

Setting property descriptors:

~~~ {.javascript}
Object.defineProperty(obj, propName, definition);
~~~

  * Define (or update) a property and its configuration

  * Some things that can be configured:
    - `enumerable`: If the property is enumerated in `for .. in` loops
    - `value`: The property's initial value
    - `writable`: If the value can change
    - `get`: Function to call when value is accessed
    - `set`: Function to call when value is changed

<div class="notes">

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

</div>

### Property Getters and Setters ### {#get-set}

~~~ {.javascript insert="../../../src/examples/js/descriptors.js" token="get-set"}
~~~

### ES2015 Getters and Setters ### {#es2015-get-set}

~~~ {.javascript insert="../../../src/babel/es2015/class.js" token="get-set"}
~~~

### Object-Oriented Programming: Gotcha ### {#this-gotcha}

What's wrong with the following code?

~~~ {.javascript insert="../../../src/examples/js/this.js" token="gotcha"}
~~~

### Accessing `this` via the `bind` Function ### {#this-bind}

Notice where `bind` is used:

~~~ {.javascript insert="../../../src/examples/js/this.js" token="this-bind"}
~~~

### Accessing `this` via a Closure Variable ### {#this-alias}

Create an alias for `this`:

~~~ {.javascript insert="../../../src/examples/js/this.js" token="this-alias"}
~~~

### Accessing `this` Directly via ES2015 Arrow Functions ### {#this-arrow}

Using the ES2015 *arrow function* syntax:

~~~ {.javascript insert="../../../src/examples/js/this.js" token="this-arrow"}
~~~

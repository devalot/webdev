The Prototype
-------------

### Inheritance in JavaScript ###

  * JavaScript doesn't use classes, it uses prototypes

  * There are ways to simulate classes (even ES2015 does it!)

  * The prototypal model:
      - Tends to be smaller
      - Less redundant
      - Can simulate classical inheritance as needed
      - More powerful

### Inheriting Properties from Other Objects ### {#property-get}

![](../../../diagrams/js/inheritance.dot)\
<!-- Placeholder -->

### Manual Configuration of Inheritance ### {#object-create}

~~~ {.javascript insert="../../../src/examples/js/objcreate.js" token="create"}
~~~

~~~ {.javascript exec="node ../../../src/examples/js/objcreate.js"}
~~~

### Setting Properties and Inheritance ### {#property-set}

![](../../../diagrams/js/inheritance-set.dot)\
<!-- Placeholder -->

### Inheritance with `__proto__` ### {#proto}

![Prototypes](../../../diagrams/js/proto-simple.dot)\
<!-- Placeholder -->

### Prototype Details ###

  * All objects have an internal link to another object called its
    *prototype* (known internally as the `__proto__` property).

  * The prototype object also has a prototype, and so on up the
    *prototype chain* (the final link in the chain is `null`).

  * Objects *delegate* properties to other objects through the
    prototype chain.

  * Only functions have a `prototype` property by default.

### Using `__proto__` in ES2015 ###

Starting in ECMAScript 2015, the `__proto__` property is standardized
as an accessible property.

*Warning:* Using `__proto__` directly is strongly discouraged due to
performance concerns.

### Looking at `Array` Instances ### {#proto-array}

![Array and Array.prototype](../../../diagrams/js/array-proto.dot)\
<!-- Placeholder -->

### The Prototype Chain

![Prototypal Inheritance](../../../diagrams/js/proto.dot)\
<!-- Placeholder -->

### Another Look at `Array` Instances

![Array and Friends](../../../diagrams/js/full-array-proto.dot)\
<!-- Placeholder -->

Establishing the Prototype Chain
--------------------------------

### Using `Object.create` ###

The `Object.create` function creates a new object and sets its
`__proto__` property:

~~~ {.javascript insert="../../../src/examples/js/objcreate.js" token="create"}
~~~

### Using the `new` Operator ###

The `new` operator creates a new object and sets its `__proto__`
property.  The `new` operator takes a function as its right operand
and sets the new object's `__proto__` to the function's `prototype`
property.

~~~ {.javascript insert="../../../src/examples/js/objnew.js"}
~~~

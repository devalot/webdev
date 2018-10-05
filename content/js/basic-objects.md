## Objects

### A Collection of Key/Value Pairs ### {#key-value}

  - Built up from the core types

  - A dynamic collection of **properties**:

    ~~~ {.javascript}
    let box = {
      color: "tan",
      height: 12
    };

    box.color;             // Getter method
    box.color = "red";     // Setter method

    let x = "color";
    box[x];          // "red"
    box[x] = "blue"; // Alternative syntax
    ~~~

### Object Basics

  - Everything is an object (almost)

  - Primitive types have object wrappers (except `null` and `undefined`)

  - They remain primitive until used as objects, for performance reasons

  - An object is a dynamic collection of properties

  - Properties can be functions

### Object Properties

There are four primary ways to work with object properties:

  #. Dot notation:

    ~~~ {.javascript}
    object.property = "foo";
    let x = object.property;
    ~~~

  #. Square bracket notation:

    ~~~ {.javascript}
    object["property"] = "foo";
    let x = object["property"];
    ~~~

  #. Through the `Object.defineProperty` function

  #. Using the `delete` function

### Property Descriptors

  - Object properties have descriptors that affect their behavior

  - For example, you can control whether or not a property can be
    deleted or enumerated

  - Typically, descriptors are hidden, use `defineProperty` to change
    them:

    ~~~ {.javascript}
    let obj = {};

    Object.defineProperty(obj, "someName", {
      configurable: false, // someName can't be deleted
      enumerable:   false, // someName is hidden
      writable:     false, // No setter for someName
      // ...
    });
    ~~~

<div class="notes">

For more information on property descriptors,
[see this MDN article] [mdn-descriptors].

[mdn-descriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

</div>

### Object Reflection

Objects can be inspected with...

  - the `typeof` operator:

    ~~~ {.javascript}
    typeof obj;
    ~~~

  - the `in` operator:

    ~~~ {.javascript}
    "foo" in obj;
    ~~~

  - the `hasOwnProperty` function:

    ~~~ {.javascript}
    obj.hasOwnProperty("foo");
    ~~~

Keep in mind that objects "inherit" properties. Use the `hasOwnProperty`
to see if an object actually has its own copy of a property.

### The typeof Operator

Sometimes useful for determining the type of a variable:

~~~ {.javascript}
typeof 42;        // "number"
typeof NaN;       // "number"
typeof Math.abs;  // "function"
typeof [1, 2, 3]; // "object"
typeof null;      // "object"
typeof undefined; // "undefined"
~~~

(But not all that useful in reality.)

<div class="notes">

Instead of doing this:

~~~ {.javascript}
if (typeof someVal === "undefined") {
  // ...
}
~~~

Just do:

~~~ {.javascript}
if (someVal === undefined) {
  // ...
}
~~~

</div>

### Property Enumeration

  - The `for..in` loop iterates over an object's properties in an
    **unspecified** order.

  - Use `object.hasOwnProperty(propertyName)` to test if a property is
    inherited or local.

~~~ {.javascript}
for (let propertyName in object) {
   /*
      propertyName is a string.

      Must use this syntax:
      object[propertyName]

      Does not work:
      object.propertyName
  */
}
~~~

### Object Keys

  - Get an array of all "own", enumerable properties:

    ~~~ {.javascript}
    Object.keys(obj);
    ~~~

  - Get even non-enumerable properties:

    ~~~ {.javascript}
    Object.getOwnPropertyNames(obj);
    ~~~

### Object References and Passing Style

  - Objects can be passed to and from functions

  - JavaScript is **call-by-sharing** (very similar to
    call-by-reference)

  - Watch out for functions that modify your objects!

  - Remember that `===` compares references

  - Since `===` only compares references, it only returns `true` if the
    two operands are the same object in memory

  - There's no built in way in JS to compare objects for similar
    contents

### JavaScript and Mutability

  - All primitives in JavaScript are immutable

  - Using an assignment operator just creates a new instance of the
    primitive

  - You can think of primitives as using **call-by-value**

  - Unless you used an object constructor for a primitive!

  - Objects are mutable (and use **call-by-sharing**)

  - Their values (properties) can change

### Exercise: Create a `copy` Function

  #. Open the following file:

        src/www/js/copy/copy.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

Hints:

  - `for (let prop in someobj) { /* ... */ }`

  - `someobj.hasOwnProperty(prop)`


<<(changes/es2015.md#o68acf4e36cb11e8a63ff768f96bc38a)

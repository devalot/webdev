Object Mutability
-----------------

### Passing Objects to Functions {#mutable-passing}

JavaScript uses *call by sharing* when you pass arguments to a
function:

~~~ {.javascript insert="../../../src/examples/js/mutability.js"}
~~~

Produces:

~~~ {.javascript exec="node ../../../src/examples/js/mutability.js"}
~~~

### `Object.freeze` {#mutable-freeze}

~~~ {.javascript}
Object.freeze(obj);

assert(Object.isFrozen(obj) === true);
~~~

  * Can't add new properties

  * Can't change values of existing properties

  * Can't delete properties

  * Can't change property descriptors

<div class="notes">
[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
</div>

### `Object.seal` {#mutable-seal}

~~~ {.javascript}
Object.seal(obj);

assert(Object.isSealed(obj) === true);
~~~

  * Properties can't be deleted, added, or configured

  * Property values can still be changed

<div class="notes">
[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal).
</div>

### `Object.preventExtensions` {#mutable-preventExtensions}

~~~ {.javascript}
Object.preventExtensions(obj);
~~~

  * Prevent any new properties from being added

<div class="notes">
[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)
</div>

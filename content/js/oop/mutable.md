## Object Mutability

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

### `ImmutableJS`

Some libraries support immutability.

```javascript
const { Map } = require('immutable')

const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = Map({ a: 1, b: 2, c: 3 })
map1.equals(map2) // true
map1 === map2 // false
```

We tried it but it's painful.

### Moral of the Story

It's *possible* to enforce immutability in code...

... but it's painful.

... and it may be unreliable.

Better option: adopt immutable programming conventions as a team.

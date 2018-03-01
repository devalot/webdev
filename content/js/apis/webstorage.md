## The Web Storage API

### What is Web Storage?

  * Allows you to store key/value pairs

  * Two levels of persistence and sharing

  * Very simple interface

  * Keys and values *must* be strings

### Session Storage

  * Lifetime: same as the containing window/tab

  * Sharing: Only code in the same window/tab

  * 5MB user-changeable limit (10MB in IE)

  * Basic API:

    ~~~ {.javascript}
    sessionStorage.setItem("key", "value");
    var item = sessionStorage.getItem("key");
    sessionStorage.removeItem("key");
    ~~~

### Local Storage

  * Lifetime: unlimited

  * Sharing: All code from the same domain

  * 5MB user-changeable limit (10MB in IE)

  * Basic API:

    ~~~ {.javascript}
    localStorage.setItem("key", "value");
    var item = localStorage.getItem("key");
    localStorage.removeItem("key");
    ~~~

### The `Storage` Object

Properties and methods:

  * `length`: The number of items in the store.

  * `key(n)`: Returns the name of the key in slot `n`.

  * `clear()`: Remove all items in the storage object.

  * `getItem(key)`, `setItem(key, value)`, `removeItem(key)`.

<div class="notes">

More information about the `Storage` object can be found at:

<https://developer.mozilla.org/en-US/docs/Web/API/Storage>

</div>

### Browser Support

  - IE      >= 8
  - Firefox >= 2
  - Safari  >= 4
  - Chrome  >= 4
  - Opera   >= 10.50

### Documentation

  * <https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>

  * <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

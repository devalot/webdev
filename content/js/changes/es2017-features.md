### ES2017 Summary ###

  * Aync functions!!

  * Updates to the `String` object

  * Small changes to `Object.prototype`

  * A few others

### Async Functions ### {#async-await}

**Major** improvement to asynchronous functions thanks to promises and
generators.  Asynchronous callbacks are hidden with new syntax.

~~~ {.javascript insert="../../../src/examples/js/async-await.js" token="getArtist"}
~~~

### Summary of Other Changes

  * String padding (ensuring a string is the proper length)
    - `String.prototype.padStart`
    - `String.prototype.padEnd`
  * `Object.values` and `Object.entries`
  * `Object.getOwnPropertyDescriptors`
  * Trailing commas in function parameters and call arguments
  * Shared memory (`SharedArrayBuffer`)
  * Atomic operations (e.g., `Atomics.store`)

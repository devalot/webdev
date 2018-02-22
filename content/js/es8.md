# ECMAScript 8th Edition (ES8/ES2017)

ES8 included a small number of important changes to the language.

## Major Changes

### Async Functions

**Major** improvement to asynchronous functions thanks to promises and
generators.  Asynchronous callbacks are hidden with new syntax.

~~~ {.javascript}
async function f() {
  try {
    var artist = await Ajax.get("/api/artists/1");
    artist.albums = await Ajax.get("/api/artists/1/albums");
    View.set("artist", artist);
  } catch(e) {
    // Rejected promises throw exceptions
    // when using `await'.
  }
}
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

### ES2017 Summary ###

  * Aync functions!!

  * Updates to the `String` object

  * Small changes to `Object.prototype`

  * A few others

### Async Functions ### {#async-await}

**Major** improvement to asynchronous functions thanks to promises and
generators.  Asynchronous callbacks are hidden with new syntax.

~~~ {.javascript}
async function getArtist() {
  try {
    var response1 = await fetch("/api/artists/1");
    var artist = await response1.json();

    var response2 = await fetch("/api/artists/1/albums");
    artist.albums = await response2.json();

    return artist;
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

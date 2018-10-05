The `async` and `await` Keywords
--------------------------------

### What are `async` Functions? ###

Functions marked as `async` become asynchronous and automatically
return promises:

~~~ {.javascript insert="../../../src/examples/js/async-await.js" token="async"}
~~~

### The `await` Keyword ###

Functions marked as `async` get to use the `await` keyword:

~~~ {.javascript insert="../../../src/examples/js/async-await.js" token="await"}
~~~

Question: What does the `example2` function return?

### Example of `async`/`await` ###

~~~ {.javascript insert="../../../src/examples/js/async-await.js" token="getArtist"}
~~~

### An Even Better Example of `async`/`await` ###

~~~ {.javascript insert="../../../src/examples/js/async-await.js" token="getArtistP"}
~~~

### Exercise: Using `async` and `await` ###

  #. Start your server if it isn't running

  #. Open `src/www/js/ajax/ajax.js`

  #. Fill in the missing pieces

  #. To test and debug, open

         http://localhost:3000/js/ajax/

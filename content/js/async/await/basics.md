### What are `async` Functions? ###

Functions marked as `async` become asynchronous and automatically
return promises:

~~~ {.javascript insert="../../../../src/examples/js/async-await.js" token="async"}
~~~

### The `await` Keyword ###

Functions marked as `async` get to use the `await` keyword:

~~~ {.javascript insert="../../../../src/examples/js/async-await.js" token="await"}
~~~

Question: What does the `example2` function return?

### Example of `async`/`await` ###

~~~ {.javascript insert="../../../../src/examples/js/async-await.js" token="getArtist"}
~~~

### An Even Better Example of `async`/`await` ###

~~~ {.javascript insert="../../../../src/examples/js/async-await.js" token="getArtistP"}
~~~

### Exercise: Using `async` and `await` ###

  #. Start your server
  
    * cd src
    * yarn start

  #. Open a browser and check out the API
  
    * http://localhost:3000/api/artists
    * http://localhost:3000/api/artists/2
    * http://localhost:3000/api/albums
  
  #. Open `src/www/js/ajax/ajax.js`
  
  #. Open `src/www/js/ajax/ajax.test.js`

  #. Make all tests pass

```shell
$ cd src
$ yarn jest ajax.test.js --watch
```

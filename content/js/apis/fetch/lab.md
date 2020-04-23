<!-- How to use our REST API -->
<<(../../mvc.md#H30c09a3c203b11e5bf151b9a1d160fa7)

### Exercise: Using the Fetch API ###

  #. Start your server
  
    * cd src
    * yarn start

  #. Open a browser and check out the API
  
    * http://localhost:3000/api/artists
    * http://localhost:3000/api/artists/2
    * http://localhost:3000/api/albums
  
  #. Open `src/www/js/fetch/fetch.js`
  
  #. Open `src/www/js/fetch/fetch.test.js`

  #. Make all tests pass

```shell
$ cd src
$ yarn jest fetch.test.js --watch
```

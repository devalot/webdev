### Built-in Functions (Types and Conversions) {#pre-parse} ###

`isNaN(num)`:
  ~ Safely test if `num` is `NaN`

`isFinite(num)`:
  ~ Test if `num` is **not** `NaN` or `Infinity`

`parseInt(str)`:
  ~ Convert a string to a number (integer)

`parseFloat(str)`:
  ~ Convert a string to a number (float)

### Exercise: Function Arguments and Parsing {#parse} ###

  #. Open the following file:

        src/www/js/parse/parse.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

### Exercise: Constructor Functions {#constructors} ###

  #. Open the following file:

        src/www/js/constructors/constructors.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

### Exercise: Class Builder {#builder} ###

  #. Open the following files:

     - `src/www/js/builder/builder.spec.js` (read only!)

     - `src/www/js/builder/builder.js`

  #. Implement the `Builder` function:

     It should generate a constructor function using the `constructor`
     property given to it.  The remaining properties become prototype
     properties.

  #. Use the `index.html` file to run the tests

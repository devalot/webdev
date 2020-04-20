## Jest: Spies

### What Are Spies

* Spies allow you to track calls to a method

  * Arguments

  * Results

* Passes call through to original implementation

### Spies API

Creating a spy:

~~~ {.javascript}
const spy = jest.spyOn(myObject, 'method')
~~~

Removing a spy:

~~~ {.javascript}
spy.restore()
~~~

### Spying on a Function or Callback (Call Tracking)

~~~ {.javascript insert="../../../src/examples/js/spy.spec.js" token="beforeEach"}
~~~

~~~ {.javascript insert="../../../src/examples/js/spy.spec.js" token="call"}
~~~

### Spying on a Function or Callback (Call Fake)

~~~ {.javascript insert="../../../src/examples/js/spy.spec.js" token="callFake"}
~~~

### Exercise: Using Jest Spies

  #. Open `src/www/js/jest/__tests__/adder.spec.js`

  #. Read the code then do exercise 2

  #. To test and debug, run

~~~
cd src
yarn test www/js/jest/__tests__/adder.spec.js
~~~

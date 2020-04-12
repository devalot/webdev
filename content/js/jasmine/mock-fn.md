### Mock Functions

Say we're testing a higher-order function:

~~~ {.javascript insert="../../../src/examples/js/mock-fn.spec.js" token="implementation"}
~~~

### Captures Calls

You can create a mock function to capture calls.

~~~ {.javascript}
const myMock = jest.fn()
~~~

Example:

~~~ {.javascript insert="../../../src/examples/js/mock-fn.spec.js" token="capture"}
~~~

### Provide Fake Behavior

You can specify static behavior of a mock function.

~~~ {.javascript insert="../../../src/examples/js/mock-fn.spec.js" token="static-imp"}
~~~

~~~ {.javascript insert="../../../src/examples/js/mock-fn.spec.js" token="static-test"}
~~~

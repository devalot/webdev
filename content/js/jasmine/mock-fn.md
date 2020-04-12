### Mock Functions

Say we're testing a higher-order function:

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="implementation"}
~~~

### Captures Calls

You can create a mock function to capture calls.

~~~ {.javascript}
const myMock = jest.fn()
~~~

Example:

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="capture"}
~~~

### Captures all arguments

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="capture-args"}
~~~

### Provide Fake Behavior

You can specify static behavior of a mock function.

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="static-imp"}
~~~

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="static-test"}
~~~

### Provide Dynamic Behavior

You can use the arguments to a mock function to create dynamic behavior.

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="dynamic-imp"}
~~~

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="dynamic-test"}
~~~

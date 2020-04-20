## Jest: Mocks

### Mocks

  * Mocks are functions with pre-programmed behavior

  * Can be used to replace methods or module dependencies

  * Why mock

    * Avoid expensive / slow calls (server calls, complex compuations, etc.)

    * Simplifies dependencies

    * Avoid complex test setup (e.g. dependency requires a bunch of state)

    * You follow the "London-TDD" style

### Mocks API

Creating a mock:

~~~ {.javascript}
const mock = jest.fn()
~~~

With behavior:

~~~ {.javascript}
const mock = jest.fn(() => 'yay')

mock() // 'yay'
~~~

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

### Mock Return Values

~~~ {.javascript insert="../../../src/examples/js/mock-fn.test.js" token="mock-return"}
~~~

### Cleanup per mock

  * **mockClear**: reset calls/results

  * **mockReset**: `mockClear` + reset return values / implementations

  * **mockRestore**: `mockReset` + restores original non-mocked implementation (for spies)

### Cleanup in beforeEach

  * **jest.clearAllMocks**

  * **jest.resetAllMocks**

  * **jest.restoreAllMocks**

### Cleanup in config

Can provide `package.json` config to do it for **all** tests:

```json
{
  "jest": {
    "clearMocks": true,
    "resetMocks": true,
    "restoreMocks": true
  }
}
```

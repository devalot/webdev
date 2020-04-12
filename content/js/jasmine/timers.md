### Testing Time-Based Logic (The Setup)

Given a delay function:

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="setup"}
~~~

This won't work the way you want:

~~~ {.javascript}
it('will not wait for no one', () => {
  const mock = jest.fn()
  delay(1000, mock)
  expect(mock).toHaveBeenCalled() // FAILS
})
~~~

Why?

### The Trouble With Time

JavaScript is a single-threaded runtime environment.

Tests run synchronously.

### Mocking Time

Set up with

~~~ {.javascript}
jest.useFakeTimers()
~~~

Many ways to manipulate time:

`jest.runAllTimers()`:
  : Run all timers until there are none left

`jest.runOnlyPendingTimers()`:
  : Run currently pending timers

`jest.advanceTimersByTime(ms)`:
  : Advance all timers by `ms`

`jest.clearAllTimers()`:
  : Clear all pending timers

### Running All Timers

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="all"}
~~~

### Running Pending Timers

Given

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="infinite-timers"}
~~~

Using `jest.runAllTimers()` will run forever.

Use `jest.runOnlyPendingTimers()` instead.

### Running Pending Timers (Example)

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="pending"}
~~~

### Advancing By Time

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="advance-time"}
~~~

### Cleanup

Good idea to use

~~~ {.javascript}
afterEach(() => {
  jest.clearAllTimers()
})
~~~

### Safer Setup

`jest.useFakeTimers` impacts all tests in a test file.

Using fake timers can have unforeseen consequences:

  * Promises behave unexpectedly
  * `async`/`await` behaves unexpectedly

Instead, you can tell each test to use *real* timers and create a way to set up a fake timer.

### Safer Setup (Setup)

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="safer-setup"}
~~~

### Safer Setup (Example)

~~~ {.javascript insert="../../../src/examples/js/time.test.js" token="safer-setup-use"}
~~~

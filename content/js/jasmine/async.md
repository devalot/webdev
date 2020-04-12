### Testing Asynchronous Functions

Jest makes it easy to deal with async behavior.

Given a (fake) server interaction:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="fake-server"}
~~~

### Testing Asynchronous Functions (with async)

You can use an `async` callback for `it`:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-await"}
~~~

Or more tersely with `await expect(...).resolves`:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-await-resolves"}
~~~

### Testing Asynchronous Functions (with Promises)

If `async` isn't available, you could return a promise:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-promise"}
~~~

You can make it more terse with `expect(...).resolves`:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-resolves"}
~~~

### Testing Async Dependencies

Say we're testing a function that uses our async `getUser` function indirectly:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-dependency"}
~~~

**Why does this work?**

### Testing Inaccessible Async Operations

Sometimes we do something async but don't await its result:

~~~ {.javascript}
it('is hard to find how to wait!', async () => {
  const mockFn = jest.fn()
  await loadUserInBackground(1, mockFn) // won't wait!
  expect(mockFn)
    .toHaveBeenCalledWith({ id: 1, name: 'Andrew' })
})

// Test output FAILURE:
//
// Expected: {"id": 1, "name": "Andrew"}
// Number of calls: 0
~~~

### Testing Inaccessible Async Operations

Easiest way is to force a process tick in the test.

We call it "flushing promises".

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-flush"}
~~~

This happens all the time in UI unit testing, e.g. with React.

### Async Error Handling

When you reject a promise and don't catch it correctly...

~~~ {.javascript}
it('should fail', () => {
  return getUser(42)
    .then((res) => { expect(1).toEqual(1) })
})
~~~

Your test will fail:

```
Error: Failed: "User ID 42 not found."
```

### Async Error Handling (with async)

You can test for error handling with `async`/`await`:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-fail-await"}
~~~

### Async Error Handling (Silent Failures)

Unfortunately, if the promise *doesn't* reject, the assertion is never called!

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-fail-await-broken"}
~~~

### Async Error Handling (with rejects)

Safest approach is to use `expect(...).rejects`:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="async-fail-rejects"}
~~~

### Async Error Handling (with rejects FTW)

This will correctly fail the test if the promise was not rejected:

~~~ {.javascript}
it('should fail', async () => {
  await expect(getUser(1))
    .rejects.toEqual('User ID 42 not found.')
})

// Test output:
//
// Received promise resolved instead of rejected
// Resolved to value: {"id": 1, "name": "Andrew"}
~~~

### Async Error Handling (thrown Errors)

If you `throw` an error, you must write a different expectation.

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="boom"}
~~~

~~~ {.javascript}
it('will not match :-(', async () => {
  return await expect(boom())
    .rejects.toEqual('kaboom')
})

// Test output FAILURE
// Expected: "kaboom"
// Received: [Error: kaboom]
~~~

### Async Error Handling (with toThrow)

Use `toThrow` instead:

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="boom"}
~~~

~~~ {.javascript insert="../../../src/examples/js/async.test.js" token="boom-toThrow"}
~~~

### Quick Note About Fake Async...

`setTimeout(cb, 0)` and `process.nextTick(cb)` are **not the same thing**.

setTimeout "takes longer" than `process.nextTick`

~~~ {.javascript}
const flushPromises = () => (
  new Promise(res => process.nextTick(res))
)

it('will not work', async () => {
  const mockFn = jest.fn()
  setTimeout(mockFn, 0)
  await flushPromises()
  expect(mockFn).toHaveBeenCalled() // Nope.
})
~~~

### Prefer process.nextTick

When possible, mock async behavior with `process.nextTick`.

Why?

Turns out `jest.useFakeTimers()` messes with `setTimeout` behavior...

~~~ {.javascript}
const flushPromisesSTO = () => (
  new Promise(res => setTimeout(res, 0))
)
~~~

### setTimeout Gets Weird

~~~ {.javascript}
it('does not work :-(', async () => {
  jest.useFakeTimers()
  const mockFn = jest.fn()
  setTimeout(mockFn, 0)
  await flushPromisesSTO()
  expect(mockFn).toHaveBeenCalled()
})

// Test output FAILURE:
// Timeout - Async callback was not invoked within
// the 5000ms timeout
~~~

### No Problems with process.nextTick

~~~ {.javascript}
it('does work', async () => {
  jest.useFakeTimers()
  const mockFn = jest.fn()
  process.nextTick(mockFn)
  await flushPromises()
  expect(mockFn).toHaveBeenCalled() // Yep!
})
~~~

Save yourself the pain and stick with `process.nextTick` when you can.

### Exercise: Handling Async Functions

  #. Open `src/www/js/jest/__tests__/async.spec.js`

  #. Do the exercises

  #. To test and debug, open

~~~
cd src
yarn test www/js/jest/__tests__/async.spec.js
~~~

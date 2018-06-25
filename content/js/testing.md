## General Testing Overview

### Testing in the Browser

In order to achieve comprehensive testing in JavaScript you need to:

  * Test your code in the web browser

  * Then test it in every browser you support

  * And use a tool that automates this process

### The Two Major Flavors of Testing

  * Assertion-based testing:

    ~~~ {.javascript}
    assert("empty objects", objects.length > 0);
    ~~~

  * Expectation-based testing:

    ~~~ {.javascript}
    expect(objects.length).toBeGreaterThan(0);
    ~~~

## Behavior-driven Development with Jasmine

### What is Jasmine?

  * Specification-based testing

  * Expectations instead of assertions

  * Provides the testing framework

  * Only provides a very simple way to run tests

### Example: Writing Jasmine Tests

~~~ {.javascript}
describe("ES6 String Methods", function() {
  it("has a find method", function() {
    expect("foo".find).toBeDefined();
  });
});
~~~

### Basic Expectation Matchers

`toBe(x)`:
  : Compares with `x` using `===`.

`toMatch(/hello/)`:
  : Tests against regular expressions or strings.

`toBeDefined()`:
  : Confirms expectation is not `undefined`.

`toBeUndefined()`:
  : Opposite of `toBeDefined()`.

`toBeNull()`:
  : Confirms expectation is `null`.

`toBeTruthy()`:
  : Should be true `true` when cast to a Boolean.

`toBeFalsy()`:
  : Should be `false` when cast to a Boolean.

### Numeric Expectation Matchers

`toBeLessThan(n)`:
  : Should be less than `n`.

`toBeGreaterThan(n)`:
  : Should be greater than `n`.

`toBeCloseTo(e, p)`:
  : Difference within `p` places of precision.


### Smart Expectation Matchers

`toEqual(x)`:
  : Can test object and array equality.

`toContain(x)`:
  : Expect an array to contain `x` as an element.

### Life Cycle Callbacks

Each of the following functions takes a callback as an argument:

`beforeEach`:
  : Before each `it` is executed.

`beforeAll`:
  : Once before any `it` is executed.

`afterEach`:
  : After each `it` is executed.

`afterAll`:
  : After all `it` specs are executed.

### Deferred (Pending) Tests

Tests can be marked as pending either by:

~~~ {.javascript}
it("declared without a body!");
~~~

or:

~~~ {.javascript}
it("uses the pending function", function() {
  expect(0).toBe(1);
  pending("this isn't working yet!");
});
~~~

### Spying on a Function or Callback (Setup)

~~~ {.javascript insert="../../src/examples/js/spy.spec.js" token="beforeEach"}
~~~

### Spying on a Function or Callback (Call Counting)

~~~ {.javascript insert="../../src/examples/js/spy.spec.js" token="call"}
~~~

### Spying on a Function or Callback (Call Through)

~~~ {.javascript insert="../../src/examples/js/spy.spec.js" token="callThrough"}
~~~

### Testing Time-Based Logic (The Setup)

~~~ {.javascript insert="../../src/examples/js/time.spec.js" token="set-up"}
~~~

### Testing Time-Based Logic (setTimeout)

~~~ {.javascript insert="../../src/examples/js/time.spec.js" token="setTimeout"}
~~~

### Testing Time-Based Logic (setInterval)

~~~ {.javascript insert="../../src/examples/js/time.spec.js" token="setInterval"}
~~~

### Testing Asynchronous Functions

~~~ {.javascript insert="../../src/examples/js/async.spec.js"}
~~~

### Running Jasmine Tests

  * [Standalone][jasmine-standalone] runner:
    - List files in `SpecRunner.html`
    - Opening that file in your browser runs the tests

  * [Node.js runner][jasmine-npm]:
    - Provides a `jasmine` tool
    - Runs tests inside Node.js

  * [Karma-Jasmine][karma-jasmine] runner:
    - Automatically manages browser farms
    - Runs tests in parallel on all browsers
    - Can use headless browsers (PhantomJS)
    - Support for continuous integration

### Best Practices for Testing

  * Make sure your tests actually fail

  * Separate pure logic from DOM manipulation

  * Test with valid *and* invalid input (or use fuzzing)

  * Automate your tests so they run all the time

  * Avoid mocking/spies if you can (they create "holes")

### Further Information

See the following for more information:

  * [Jasmine][] documentation

  * [Karma][] test runner

Other testing frameworks:

  * [JSPec][]: Full-featured behavior testing

  * [Sinon][]: Spies, stubs, and mocks

  * [Chai][]: Testing assertion library

## Browser Automated Testing

### End-to-End Testing Options

![](../../diagrams/js/browser-testing.dot)\
<!-- Placeholder -->

[karma]: http://karma-runner.github.io/0.12/index.html
[jasmine]: http://jasmine.github.io/
[jasmine-standalone]: https://github.com/pivotal/jasmine/releases
[jasmine-npm]: https://github.com/jasmine/jasmine-npm
[karma-jasmine]: https://github.com/karma-runner/karma-jasmine
[jspec]: https://www.drupal.org/project/jspec
[sinon]: http://sinonjs.org/
[chai]: http://chaijs.com/
[selenium]: http://www.seleniumhq.org/
[phantomjs]: http://phantomjs.org/

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

<<(jasmine/index.md)

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

## Testing Overview

### 3 Types of Tests

  #. Unit

  #. Integration

  #. End-to-End (E2E)

**Unit** and **Integration** tests can be run without a browser. Faster to run, sometimes slower to write.

**E2E** tests simulate user behavior interacting with a browser environment. Slower to run, sometimes faster to write.

### Unit and Integration Tests

Most popular framework is **Jest**.

Other common frameworks are **Mocha**, **Jasmine**, **AVA**, **Tape**, and **QUnit**

### Unit and Integration Tests Categories

There's two basic categories that JS unit tests fall into:

  #. Pure JavaScript

  #. JavaScript + Browser

Code that is "just" JavaScript (no browser APIs) is the easiest to test.

Testing code that includes the browser is often challenging and often requires more mocking.

<<(jest/index.md)

<<(jest/jsdom.md)

<<(jest/best-practices.md)

## E2E Testing

### E2E Testing

It simulates a user interacting with your website via a browser.

  * PROS: Less mocking --> easier to write

  * CONS: Slow to run

### E2E Testing Frameworks

Popular services/frameworks:

  * Cypress

  * Nightwatch

  * Selenium

## Compatibility Testing

### Compatibility Testing

Depending on your team's requirements, you may need to make sure your site works in all browsers.

Popular services:

  * SauceLabs

  * BrowserStack

   * LambdaTest

These tests are the most expensive to write and maintain.

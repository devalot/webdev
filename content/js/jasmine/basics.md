### What is Jasmine? ###

  * Specification-based testing

  * Expectations instead of assertions

  * Provides the testing framework

  * Only provides a very simple way to run tests

### Example: Writing Jasmine Tests ###

~~~ {.javascript}
describe("ES2015 String Methods", function() {
  describe("Prototype Methods", function() {
    it("has a find method", function() {
      expect("foo".find).toBeDefined();
    });
  });
});
~~~

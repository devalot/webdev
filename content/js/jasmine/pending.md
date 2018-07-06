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

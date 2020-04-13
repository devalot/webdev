## Unit Testing Best Practices

### Most Importantly

  * Practice TDD

    #. Red (write a failing test)

    #. Green (make the test pass)

    #. Refactor (make your code better)

Really. Just do it.

### Be Persistent and Track Your Discoveries

  * There are also hard, tricky testing situations. Don't give up.

  * Google, Stack Overflow, ask teammates, ping `@andrewsouthpaw`, etc.

  * Track solutions in `test-helpers.js`

    * e.g.: `flushPromises`, `stubTime`

  * Keep a living document of testing style and troubleshooting.

### Other Valuable Practices

  * Write abstractions to make your test files easier to read

  * Make factories to simplify test data creation

    * e.g. `newTodo`, `newUser`, `newAppState`, etc.

  * Test for error handling on server interactions

  * Automate your tests so they run all the time

  * Avoid mocking/stubbing as they create implicit interface contracts. Generally only mock:

    #. Server calls

    #. Complex functions / behavior

    #. Slow / expensive functions

### UI Testing Best Practices

  * Separate business logic from DOM manipulation

  * Interact with UI as a user, not a programmer, e.g.:

    * Click the "Save" button, don't invoke `handleSaveClick`

    * Expect text changes, not `<p>` elements

## Testing JS + Browser

### Testing Browser Interactions in Unit Tests

Sometimes your unit/integration tests will involve browser APIs, e.g.:

  * `addTodoToDOMList`: appends an `li` element to a `ul` todos element.

Use **jsdom**: creates fake browser environment

### DOM Manipulation

~~~ {.javascript insert="../../../src/examples/js/jsdom.test.js" token="jsdom-add-todo"}
~~~

### Testing DOM Manipulations Setup

Set the browser body *each time*, it persists between tests.

~~~ {.javascript insert="../../../src/examples/js/jsdom.test.js" token="jsdom-test-setup"}
~~~

### Testing DOM Manipulations

~~~ {.javascript insert="../../../src/examples/js/jsdom.test.js" token="jsdom-test"}
~~~

Pure magic.

## UI Testing Libraries

### UI Testing Libraries

Makes it easier to write UI tests.

  * DOM-only

    * `@testing-library/dom`

  * React

    * `@testing-library/react`

    * `enzyme`

    * `react-test-renderer`

  * Vue

    * `@testing-library/vue`

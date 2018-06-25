# Asynchronous Programming

## The JavaScript Runtime

### Introduction to the Runtime

  * JavaScript has a single-threaded runtime

  * Work is therefore split up into small chucks (functions)

  * Callbacks are used to divide work and call the next chunk

  * The runtime maintains a work queue where callbacks are kept

### Visualizing the Runtime

![The JavaScript Event Loop](../../diagrams/js/runtime.dot)\
<!-- Placeholder -->

## Promises {#promises}

### Callbacks without Promises

~~~ {.javascript insert="../../src/examples/js/promise.js" token="without"}
~~~

### Callbacks Using Promises

~~~ {.javascript insert="../../src/examples/js/promise.js" token="with"}
~~~

### Promise Details

  * Guarantee that callbacks are invoked (no race conditions)

  * Composable (can be chained together)

  * Flatten code that would otherwise be deeply nested

### Visualizing Promises (Composition)

![](../../diagrams/js/promise-compose.svg)\
<!-- After diagram placeholder -->

### Visualizing Promises (Owner)

![](../../diagrams/js/promise-owner.dot)\
<!-- After diagram placeholder -->

### Example: Promise Owner

~~~ {.javascript insert="../../src/spec/promise.spec.js" token="delayed"}
~~~

### Visualizing Promises (User)

![](../../diagrams/js/promise-user.dot)\
<!-- After diagram placeholder -->

### Composition Example

~~~ {.javascript insert="../../src/spec/promise.spec.js" token="chain"}
~~~

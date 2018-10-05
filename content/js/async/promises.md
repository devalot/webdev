Promises {#promises}
--------------------

### Callbacks without Promises ### {#async-callbacks}

~~~ {.javascript insert="../../../src/examples/js/promise.js" token="without"}
~~~

### Callbacks Using Promises ### {#promise-callbacks}

~~~ {.javascript insert="../../../src/examples/js/promise.js" token="with"}
~~~

### Promise Details ### {#promise-details}

  * Guarantee that callbacks are invoked (no race conditions)

  * Composable (can be chained together)

  * Flatten code that would otherwise be deeply nested

### Visualizing Promises (Composition) ### {#promise-composition}

![](../../../diagrams/js/promise-compose.svg)\
<!-- After diagram placeholder -->

### Visualizing Promises (Owner) ### {#promise-owner-diagram}

![](../../../diagrams/js/promise-owner.dot)\
<!-- After diagram placeholder -->

### Example: Promise Owner ### {#promise-owner-example}

~~~ {.javascript insert="../../../src/spec/promise.spec.js" token="delayed"}
~~~

### Visualizing Promises (User) ### {#promise-user-diagram}

![](../../../diagrams/js/promise-user.dot)\
<!-- After diagram placeholder -->

### Promise Composition Example ### {#promise-composition-example}

~~~ {.javascript insert="../../../src/spec/promise.spec.js" token="chain"}
~~~

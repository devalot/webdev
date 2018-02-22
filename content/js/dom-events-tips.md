## Event Handling Tips and Techniques

### Event Loop Warnings

  - Avoid blocking functions (e.g., `alert`, `confirm`)

  - For long tasks use eteration or web workers

  - Eteration: Break work up using `setTimeout(0)`

<!-- FIXME: ### Event "Eteration" -->

### Event "Debouncing"

  - Respond to events in intervals instead of in real-time
  - Reuse a timeout object to process events in the future

~~~ {.javascript insert="../../src/examples/js/debounce.js" token="debounce"}
~~~

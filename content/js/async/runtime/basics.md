### Introduction to the Runtime ### {#intro}

  * JavaScript has a single-threaded runtime

  * Work is therefore split up into small chucks (functions)

  * Callbacks are used to divide work and call the next chunk

  * The runtime maintains a work queue where callbacks are kept

(See the demo: `src/www/js/runtime/index.html`)

### Visualizing the Runtime ###

![The JavaScript Event Loop](../../../../diagrams/js/runtime.dot)\
<!-- Placeholder -->

(See the demo: `src/www/js/runtime/index.html`)

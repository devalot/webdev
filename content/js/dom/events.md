## Event Handling and Callbacks

### Events Overview

  - Single-threaded, but asynchronous event model

  - Events fire and trigger registered handler functions

  - Events can be click, page ready, focus, submit (form), etc.

### So Many Events!

  - UI: load, unload, error, resize, scroll
  - Keyboard: keydown, keyup, keypress
  - Mouse: click, dblclick, mousedown, mouseup, mousemove
  - Touch: touchstart, touchend, touchcancel, touchleave, touchmove
  - Focus: focus, blur
  - Form: input, change, submit, reset, select, cut, copy, paste

### Using Events (the Basics)

  #. Select the element you want to monitor

  #. Register to receive the events you are interested in

  #. Define a function that will be called when events are fired

### Event Registration

Use the `addEventListener` function to register a function to be
called when an event is triggered:

Example: Registering a click handler:

~~~ {.javascript insert="../../../src/examples/js/eventex.js"}
~~~

**Note**: Don't use older event handler APIs such as `onClick`!

<div class="notes">

See [this reference][event-types] for a list of all event types.

[event-types]: https://developer.mozilla.org/en-US/docs/Web/Events

</div>

### Event Handler Call Context

  - Functions are called in the context of the DOM element

  - I.e., `this === eventElement`

  - Use `bind` or the `var self = this;` trick

### Event Propagation

<div class="notes">

Some additional details about events, propagation, and the browser's
default action.

</div>

  * By default, events propagate from the target node upwards until
    the root node is reached (bubbling).

  * Event handlers can stop propagation using the
    `event.stopPropagation` function.

  * Event handlers can also stop the browser from performing the
    default action for an event by calling the `event.preventDefault`
    function

Example: Event Handler

~~~ {.javascript insert="../../../src/examples/js/eventstop.js" token="example"}
~~~

### Event Delegation

  - Parent receives event instead of child (via bubbling)

  - Children can change without messing with event registration

  - Fewer handlers registered, fewer callbacks

  - Relies on some event object properties:
    -   `event.target`: The element the event triggered for
    -   `event.currentTarget`: Registered element (parent)

### Event Handling: A Complete Example {#a6c1d41c258611e89ac42bb59fa4b75e}

~~~ {.javascript insert="../../../src/examples/js/events.js"}
~~~

### Exercise: Simple User Interaction

  #. Open the following files in your text editor:

     - `src/www/js/events/events.js`

     - `src/www/js/events/index.html` (read only!)

  #. Open the `index.html` file in your web browser.

  #. Complete the exercise.

### Event Loop Warnings

  - Avoid blocking functions (e.g., `alert`, `confirm`)

  - For long tasks use eteration or web workers

  - Eteration: Break work up using `setTimeout(0)`

### Event "Debouncing"

  - Respond to events in intervals instead of in real-time
  - Reuse a timeout object to process events in the future

~~~ {.javascript insert="../../../src/examples/js/debounce.js" token="debounce"}
~~~

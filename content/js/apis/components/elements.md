<!-- https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements -->

### Custom HTML Elements ###

The Web Components standard allows us to create custom HTML elements:

  * Create an ES2015 class that inherits from `HTMLElement`

  * Pick the name for your new HTML element (must contain a hyphen ("`-`"))

  * Register your class as a handler for the custom element name

### Autonomous Custom Elements ###

Create new HTML elements that do whatever you want!

~~~ {.javascript}
class ChatBox extends HTMLElement { }
customElements.define("chat-box", ChatBox);
~~~

and in your HTML:

~~~ {.html}
<chat-box></chat-box>
~~~

### Lifecycle Callbacks ###

Custom element classes can respond to a small number of events by
defining methods:

`constructor`:
  ~ Element created (don't forget to call `super()`)

`connectedCallback`:
  ~ The custom element was added to the DOM

`disconnectedCallback`:
  ~ Removed from the DOM

`attributeChangedCallback`:
  ~ Notification for observed attributes

<div class="notes">

To be notified of changes to attributes you must *observe* them by
defining a static property getter:

~~~ {.javascript}
static get observedAttributes() {
  return ["id", "class"];
}
~~~

Finally, some web component frameworks have additional lifecycle
callbacks.  For example, the Lighting Web Components (LWC) framework
contains a `render` callback.

</div>

### Example: Autonomous Custom Element ###

~~~ {.javascript insert="../../../../src/www/js/apis/components/example.js" token="autonomous-elements"}
~~~

(See: `src/www/js/apis/components/example.js`)

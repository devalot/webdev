<!-- https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements -->

### Custom HTML Elements ###

The Web Components standard allows us to create two types of custome
HTML elements:

  * Completely new elements as long as they have a dash in their name
    (e.g. `<chat-box>`)

  * Customized versions of existing HTML elements (e.g. `<p is="chat-box">`)

Both types of elements require an ES2015 class to drive the element's
behavior.

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

</div>

### Example: Autonomous Custom Element ###

~~~ {.javascript insert="../../../../src/www/js/apis/components/example.js" token="autonomous-elements"}
~~~

(See: `src/www/js/apis/components/example.js`)

### Customized Built-in Elements ###

Add additional behaviors to existing elements:

~~~ {.javascript insert="../../../../src/www/js/apis/components/example.js" token="customized-elements"}
~~~

(See: `src/www/js/apis/components/example.js`)

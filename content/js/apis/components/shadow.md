<!-- https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM -->

### The Shadow DOM ###

Custom elements can have their own DOM which is private and hidden.
It's call the *shadow* DOM.

  * A single element may have a complicated DOM behind it (think of
    the `<video>` element)

  * Isolates JavaScript and CSS so only the shadow DOM is affected

  * Perfect for encapsulated components!

### Example: Creating and Using a Shadow DOM ###

~~~ {.javascript insert="../../../../src/www/js/apis/components/example.js" token="shadow"}
~~~

(See: `src/www/js/apis/components/example.js`)

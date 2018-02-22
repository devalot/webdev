### Document Object Model: Nodes

  * Fetching a Single Node

    - `document.getElementById("main");`
    - `document.querySelector("p span");`

  * Fetching Many Nodes

    - `document.querySelectorAll("p span");`
    - `document.getElementsByClassName("highlight");`

  * Properties for Traversing the Tree

    - `parentNode`
    - `previousSibling` *or* `previousElementSibling`
    - `nextSibling` *or* `nextElementSibling`
    - `firstChild` *or* `firstElementChild`
    - `childNodes` *or* `children`

  * Creating and Inserting Nodes

    - `document.createElement("li");`
    - `parent.appendChild(newChild);`
    - `parent.insertBefore(newChild, existingChild);`

  * Important Element Node Properties

    - `innerHTML`: All descendants converted into HTML.  Can be
      assigned to.

    - `textContent`: All descendant text nodes concatenated together.
      Can be assigned to.

### Document Object Model: Events

  * Modern API

    ~~~ {.javascript}
    node.addEventListener(eventName, handler);
    ~~~

    Where:

    - `eventName` is `"click"`, `"submit"`, etc.
    - `handler` is a function that accepts one argument.

  * Complete Example

~~~ {.javascript insert="../../src/examples/js/events.js"}
~~~

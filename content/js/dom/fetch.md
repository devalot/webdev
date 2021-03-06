## Getting References to Elements

<div class="notes">

Starting with the `document` global variable, you can access specific
elements in the DOM using the following functions.  Once you have a
specific element you can use these functions again (with the element
as the receiver) to search the DOM, which starts the search in the
element's decedents.

</div>

### Accessing Individual Elements {#c90768f0258511e8b89193e5afe59cab}

Starting on the `document` object or a previously selected element:

`document.getElementById("main");`

  : Returns the element with the given ID (e.g., `<div id="main">`).

`document.querySelector("p span");`

  : Returns the *first* element that matches the given CSS selector.
    The search is done using depth-first pre-order traversal.

### Accessing a List of Elements

Starting on the `document` object or a previously selected element:

`document.getElementsByTagName("a");`

  : Returns a `NodeList` containing *all* `<a>` elements.

`document.getElementsByClassName("highlight");`

  : Returns a `NodeList` containing *all* elements that have a `class`
    attribute set to `foo` (e.g., `<div class="highlight">`).

`document.querySelectorAll("p span");`

  : Returns a `NodeList` containing *all* elements that match the given
    CSS selector.

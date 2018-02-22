## Traversing the DOM

<div class="notes">

Once you have a single element in the DOM you can traverse from that
point to somewhere else in the tree using the following read-only
**properties**:

</div>

### Traversal Functions

`parentNode`

  : The parent of the specified element.

`previousSibling`

  : The element immediately preceding the specified element.

`nextSibling`

  : The element immediately following the specified element.

`firstChild`

  : The first child element of the specified element.

`lastChild`:

  : The last child element of the specified element.

`childNodes`

  : A `NodeList` containing the direct decedents (children) of the
    specified element.

<div class="notes">

### Traversal Example

**Note:** Remember that when you traverse the DOM you will encounter
text nodes and comments in addition to child elements!

(@domex) Example: Examining the children of a node:

    ~~~ {.javascript insert="../../src/examples/js/domex.js"}
    ~~~

</div>

*But...*

### DOM Living Standard (WHATWG)

Supported in IE >= 9:

`children`:

  : All *element* children of a node (i.e. no text nodes).

`firstElementChild`:

  : First *element* child.

`lastElementChild`:

  : Last *element* child.

`childElementCount`:

  : The number of children that are *elements*.

`previousElementSibling`:

  : The previous sibling that is an *element*.

`nextElementSibling`:

  : The next sibling that is an *element*.

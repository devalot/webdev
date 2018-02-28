## Node Types

<div class="notes">

While traversing the DOM it's helpful to know which type of nodes you
are working with.  The `nodeType` property is an integer that
precisely identifies the node.

</div>

### The `nodeType` Property

Interesting values for the `element.nodeType` property:

| Value | Description   |
|-------+---------------|
|     1 | Element node  |
|     3 | Text node     |
|     8 | Comment node  |
|     9 | Document node |

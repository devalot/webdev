### What is the DOM?

  - What most people hate when they say they hate JavaScript
  - The DOM is the browser's API for the document
  - Through it you can manipulate the document
  - Browser parses HTML and builds a tree structure
  - It's a live data structure

### The Document Structure

  - The `document` object provides access to the document
  - It's a tree-like structure
  - Each node in the tree represents one of:
    - Element
    - Content of an element
  - Relationships between nodes allow traversal

### Looking at the Parsed HTML Tree (again)

And produce this tree structure:

![](../../../diagrams/html/tree.dot)\
<!-- Here to stop a figure heading above -->

### Element Nodes

  - The HTML:

    ~~~ {.html}
    <p id="name" class="hi">My <span>text</span></p>
    ~~~

  - Maps to:

    ~~~ {.javascript}
    let node = {
      tagName:    "P",
      childNodes: NodeList,
      className:  "hi",
      innerHTML:  "My <span>text</span>",
      id:         "name",
      // ...
    };
    ~~~

    -   Attributes may **very loosely** to object properties

### Working with the Document Object Model

  - Accessing elements:
    -   Select a single element
    -   Select many elements
    -   Traverse elements
  - Working with elements
    -   Text nodes
    -   Raw HTML
    -   Element attributes


### Performance Considerations

  - Dealing with the DOM brings up a lot of performance issues
  - Accessing a node has a cost (especially in IE)
  - Styling has a bigger cost (it cascades)
    -   Inserting nodes
   -   Layout changes
    -   Accessing CSS margins
    -   Reflow
    -   Repaint
  - Accessing a `NodeList` has a cost

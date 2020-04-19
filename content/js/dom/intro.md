### What is the DOM?

  - The browser's API for the HTML document
  - Allows you to read and manipulate a website
  - Browser parses HTML and builds a tree data structure

### The Document Structure

  - The `document` object provides access to the document
  - Two primary node types:
    - Element
    - Text

### HTML Tree

```html
<html>
<body>
  <h1 id="title">Welcome</h1>
  <p>Cool <span class="loud">Site!</span></p>
</body>
</html>
```

### Parsed HTML Tree

![](../../../diagrams/html/tree.dot)

### Element Nodes

* The HTML:

~~~ {.html}
<p id="name" class="hi">My <span>text</span></p>
~~~

* Maps to:

~~~ {.javascript}
{
  tagName:    "P",
  childNodes: NodeList,
  className:  "hi",
  innerHTML:  "My <span>text</span>",
  id:         "name",
  // ...
}
~~~

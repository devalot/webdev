## HTML Refresher

### What is HTML?

  - Hyper Text Markup Language

  - HTML is very error tolerant (browsers are very forgiving)

  - That said, you should strive to write good HTML

  - Structure of the UI and the content of the **view data**

  - Parsed as a tree of nodes (elements)

  - HTML5
    - Rich feature set
    - Semantic (focus on content and not style)
    - Cross-device compatibility
    - Easier!

### HTML Represented as Plain Text

~~~ {.html insert="../../src/examples/html/simple.html"}
~~~

### HTML Parsed into a Tree Structure

![](../../diagrams/html/tree.dot)\
<!-- Placeholder -->

### Anatomy of an HTML Element

  - Also known as: nodes, elements, and tags:

    ~~~ {.html}
    <element key="value" key2="value2">
      Text content of element
    </element>
    ~~~

  - Block vs. inline:

    ~~~ {.html}
    <p>Paragraph</p>  <!-- Creates a new visual block -->
    <span>Text</span> <!-- Only affects inline text -->

    <p>Hey, this is a <span>paragraph</span></p>
    ~~~

  - Self-closing elements:

    ~~~ {.html}
    <input type="password" name="pin"/>

    <!-- or, with HTML5: -->
    <input type="password" name="pin">
    ~~~

# Brief Overview of HTML

## Introduction to HTML

### What is HTML?

  - Hyper Text Markup Language

  - HTML is very error tolerant (browsers are very forgiving)

  - That said, you should strive to write good HTML

  - Structure of the UI and the content of the **view data**

  - Parsed as a tree of nodes (elements)

  - HTML5
    -   Rich feature set
    -   Semantic (focus on content and not style)
    -   Cross-device compatibility
    -   Easier!

### Anatomy of an HTML Document/Page

~~~ {.html}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello Again!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
~~~

### Anatomy of an HTML Element

  - Also known as: nodes, elements, and tags:

    ~~~ {.html}
    <element key="value">
      Content of element
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
    ~~~

## HTML Tags

### HTML Element Refresher: Structure Elements

  - `div`, and `span`
  - `table`, `tr`, `td`, `thead`, `tbody`, etc.
  - `form`, `fieldset`, `label`, `input`, etc.
  - And new HTML5 semantic elements

### HTML Element Refresher: Content Elements

  - `h1` through `h6`
  - `p`
  - `ol` or `ul` along with `li`
  - Text modifies such as `em` and `strong`

### HTML Element Refresher: Reference

  - <https://developer.mozilla.org/en-US/docs/Web/HTML/Element>

### HTML5 Semantic Elements

  - Designed to degrade gracefully on non-HTML5 browsers
  - Defines an outline and semantic hints for a document
    -   `header`, `footer`, `nav`, `main`
    -   `section`, `article`, `aside`, `figure`, `figcaption`
    -   `time`, `mark`, `details`, `summary`
  - <http://jsfiddle.net/mrmorris/cb47mzpq/>

## HTML Structures

### HTML5 Forms

  - New input types:
    -   `number`, `range`, `url`, `email`
    -   `tel`, `color`, `search`
  - New element: `datalist`
  - New input attributes:
    -   `required`, `autofocus`, `placeholder`, `list`
  - Built-in validation
  - <http://jsfiddle.net/mrmorris/zh18vn4x/>

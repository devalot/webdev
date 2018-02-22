## CSS Refresher

### What is CSS?

  - Cascading Style Sheets
  - Rule-based language for describing the look and formatting
  - Separates presentation from content
  - Can be a separate file or inline in the HTML
  - Prefer using a separate file

### What Does CSS Look Like?

~~~ {.css}
 p {
   background-color: white;
   color: blue;
   padding: 5px;
 }

 .spoiler {
   display: none;
 }

 p.spoiler {
   display: block;
   font-weight: bold;
 }
~~~

### Anatomy of a CSS Declaration

  - Selectors choose which elements you want to style. A selector is
    followed by a body where styling properties are set:

    ~~~ {.css}
    selector {
      property-x: value;
      property-y: val1 val2;
    }
    ~~~

  - For example:

    ~~~ {.css}
    h1 {
      color: #444;
      border: 1px solid #000;
    }
    ~~~

### The Various Kinds of Selectors

  - Using the element's type (name):
    -   HTML: `<h1>Hello</h1>`
    -   CSS: `h1 {...}`

  - Using the ID attribute:
    -   HTML: `<div id="header"></div>`
    -   CSS: `#header {...}`

  - Using the class attribute:
    -   HTML: `<div class="main"></div>`
    -   CSS: `.main {...}`

  - Using location or relationships:
    -   HTML: `<ul><li><p>One</p></li><li>Two</li></ul>`
    -   CSS: `ul li p {...}`

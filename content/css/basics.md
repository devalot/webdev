## Brief Overview of CSS

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

  - Rules (called selectors) choose which elements you want to style. In
    the body of the rule you set properties:

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
  - Using any attribute:
    -   HTML: `<div name="user"></div>`
    -   CSS: `div[name="user"] {...}`
  - Using location or relationships:
    -   HTML: `<ul><li><p>One</p></li><li>Two</li></ul>`
    -   CSS: `ul li p {...}`

### The Cascade

What happens when properties conflict?

  - HTML:

    ~~~ {.html}
    <div id="main" class="fancy">
      What color will this text be?
    </div>
    ~~~

  - CSS:

    ~~~ {.css}
    #main {color: red;}

    #main.fancy {color: blue;}

    div.fancy {color: green;}
    ~~~

### Specificity Chart

  Selector             Points
  -----------          -------------
  Universal selector   0
  Type selectors       1
  Pseudo elements      1
  Classes              10
  Pseudo classes       10
  Attribute selectors  10
  ID selectors         100


  * Inline styles add 1,000 points.

  * Tie breaker: last defined style wins.

  * Force highest specificity with `!important`.

### New Selectors and Classes

  - Attribute selectors:

    <http://jsfiddle.net/mrmorris/tp6t6skt>

  - Sibling selectors:

    <http://jsfiddle.net/mrmorris/98jg21y3/>

  - Pseudo-classes, form inputs:

    <http://jsfiddle.net/mrmorris/nqsbj80o/>

  - Pseudo-classes, structural (location):

    <http://jsfiddle.net/mrmorris/ghddq4eu/>

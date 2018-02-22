# Inheritance, Cascading, and Specificity

## Inheritance

### Inheriting Styles from Ancestors

![](../../diagrams/css/inheritance.dot)\
<!-- Prevent the image above from turning into a figure. -->

### Inheritable Properties

An (incomplete) list of inheritable properties

\columnsbegin
\column{.5\textwidth}

  * `line-height`
  * `color`
  * `text-align`
  * `letter-spacing`

\column{.5\textwidth}

  * `font-family`
  * `font-style`
  * `font-variant`
  * `font-weight`
  * `font-size`

\columnsend

### Forcing Inheritance

You can inherit any value from a parent as long as it's set on the
parent and you use the `inherit` value keyword:

~~~ {.css}
/* Set the value on the parent:      */
p        { border: 1px solid blue;   }

/* Inherit from the parent:          */
p > span { border: inherit;          }

/* Or change the property's behavior */
*        { border: inherit;          }
~~~

## The Cascade

### Conflicting Properties

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

## Specificity

### Specificity Chart

  Selector             Points          Examples
  -----------          -------------   -------------
  Universal selector   0               `*`
  Type selectors       1               `p`, `a`, `h1`, etc.
  Pseudo elements      1               `::before`, `::after`, etc.
  Classes              10              `.sidebar`
  Pseudo classes       10              `:nth-child`
  Attribute selectors  10              `[type="number"]`
  ID selectors         100             `#main`


  * Inline styles add 1,000 points.

  * Tie breaker: last defined style wins.

  * Force highest specificity with `!important`.

<div class="notes">

This method for calculating specificity is an approximation that works
most of the time.  For the full story see [@W3CSel] .

</div>

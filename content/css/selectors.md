# Advanced Selectors

## CSS Selector Quiz

### Selector Quiz

What do these selectors match, and what's the difference between them?

~~~ {.css}
p span  { /* ... */ }

p, span { /* ... */ }
~~~

### Selector Quiz

What does this selector match?

~~~ {.css}
li.active.tracked span { /* ... */ }
~~~

### Selector Quiz

What does this selector match?

~~~ {.css}
ul li:first-child { /* ... */ }
~~~

### Selector Quiz

What does this selector match?

~~~ {.css}
li:nth-child(3n+1):not(:only-child) { /* ... */ }
~~~

## Siblings, Children, and Descendants

### Descendant Selector Refresher

  * HTML:

    ~~~ {.html insert="../../src/examples/css/descendants.html" token="ul"}
    ~~~

  * CSS:

    ~~~ {.css}
    article ul { /* ... */ }
    ~~~

  * Match all `<ul>` decedents of `<article>`

### Child Selector

  * HTML:

    ~~~ {.html insert="../../src/examples/css/descendants.html" token="ul"}
    ~~~

  * CSS:

    ~~~ {.css}
    article > ul { /* ... */ }
    ~~~

  * Match `<ul>` decedents of `<article>` that are direct children

### Sibling Selector

  * HTML:

    ~~~ {.html insert="../../src/examples/css/descendants.html" token="ul"}
    ~~~

  * CSS:

    ~~~ {.css}
    ul + section { /* ... */ }
    ~~~

  * Match `<section>` siblings that immediately follow a `<ul>`

### General Sibling Selector

  * HTML:

    ~~~ {.html insert="../../src/examples/css/descendants.html" token="general"}
    ~~~

  * CSS:

    ~~~ {.css}
    p ~ ol { /* ... */ }
    ~~~

  * Match all `<ol>` siblings that come after a `<p>`

### Exercise: Siblings, Children, and Descendants

  #. Open (and edit) the following file in your text editor:

        www/selectors/part-01.css

  #. Review (but don't edit) the following file:

        www/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

## Pseudo Classes and Elements

### Class Refresher

  * HTML:

    ~~~ {.html insert="../../src/examples/css/classes.html" token="html"}
    ~~~


  * CSS:

    ~~~ {.css insert="../../src/examples/css/classes.html" token="css"}
    ~~~

### Pseudo What?

  * Advanced selectors that use the element's state or relative
    location

  * Can also select non-elements (e.g., paragraph text)

  * Begin with a colon (`:`) instead of a dot (`.`)

  * (Pseudo elements now start with two colons (`::`))

### Pseudo Class Example

~~~ {.css insert="../../src/examples/css/focus.html" token="css"}
~~~

<div class="notes">

  * Pseudo classes act like the browser is adding and removing classes
    on elements when the state of the browser changes

  * When an input has the keyboard focus it will match the `:focus`
    pseudo class

</div>


### Pseudo Element Example

~~~ {.css insert="../../src/examples/css/paragraph.html" token="css"}
~~~

<div class="notes">

  * Allows you to select things that are not actually elements

  * This includes the text in a paragraph, and the space before and
    after other elements.

</div>

### Partial List of Pseudo Classes and Elements

 Classes     Elements
 ---------   ------------
 `:link`     `::first-line`
 `:visited`  `::first-letter`
 `:active`   `::after`
 `:checked`  `::before`
 `:focus`    `::selection`
 `:hover`
 `:enabled`
 `:disabled`
 `:root`

### Exercise: Pseudo Classes and Elements

  #. Open (and edit) the following file in your text editor:

        www/selectors/part-02.css

  #. Review (but don't edit) the following file:

        www/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

## Child Pseudo Selectors

### Selecting the First or Last Child

* HTML:

~~~ {.html insert="../../src/examples/css/pseudo.html" token="html"}
~~~

* CSS:

~~~ {.css insert="../../src/examples/css/pseudo.html" token="css"}
~~~

### Selecting First or Last Based on Type

* HTML:

~~~ {.html insert="../../src/examples/css/pseudo.html" token="type-html"}
~~~

* CSS:

~~~ {.css insert="../../src/examples/css/pseudo.html" token="type-css"}
~~~

### Exercise: Child Pseudo Selectors

  #. Open (and edit) the following file in your text editor:

        www/selectors/part-03.css

  #. Review (but don't edit) the following file:

        www/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

## Pseudo Classes that Take Values

Some pseudo classes can act like functions that take values.  The
selector changes its behavior based on the value given.

~~~ {.css}
:name(value) { /* ... */ }
~~~

<div class="notes">

Example selectors that take values:

  * `nth-child`

  * `nth-last-child`

  * `nth-of-type`

  * `nth-last-of-type`

  * `not`

</div>

### Selecting Any Grouping of Children

<!-- Introduce the nth-child selector -->

~~~ {.css}
:nth-child(value) { /* ... */ }
~~~

Example uses of `nth-child`:

  * Select even or odd children

  * Select every third child

  * Select the first 5 children

  * Select the last 8 children

### Even or Odd Children

~~~ {.css}
li:nth-child(even) { /* ... */ }
li:nth-child(odd)  { /* ... */ }
~~~

(The first child is odd.)

### The Nth Child

Select the third (and only the third) child:

~~~ {.css}
li:nth-child(3) { /* ... */ }
~~~

### Every Nth Child

Select the third child and every third child after that:

~~~ {.css}
li:nth-child(3n) { /* ... */ }
~~~

### Every Nth Child Starting at X

Select every third child, starting at the first child:

~~~ {.css}
li:nth-child(3n+1) { /* ... */ }
~~~

### Selecting All Previous or Following Children

Select all children after (and including) the second child:

~~~ {.css}
li:nth-child(n+2) { /* ... */ }
~~~

Select all child before (and including) the second child:

~~~ {.css}
li:nth-child(-n+2) { /* ... */ }
~~~

### Nth Child Variations

`:nth-last-child`:
  ~ Starts from the bottom of the child list.

`:nth-of-type`:
  ~ Filters the child list by a type selector.

`:nth-last-of-type`:
  ~ `:nth-of-type` + `:nth-last-child`

## The `not` Pseudo Class

### Negating a Selector

~~~ {.css insert="../../src/examples/css/not.html" token="not-class"}
~~~

### Simple Selectors

The `:not` pseudo-class can only be used with *simple selectors*:

  * Type selector

  * Universal selector

  * Attribute selector

  * Class and pseudo-class selectors

  * ID selector

Type selector example:

~~~ {.css insert="../../src/examples/css/not.html" token="not-ul"}
~~~

### Exercise: Pseudo Classes that Take Values

  #. Open (and edit) the following file in your text editor:

        www/selectors/part-04.css

  #. Review (but don't edit) the following file:

        www/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

## Attribute Selectors

### Selecting Based on Arbitrary Attributes

Writing a selector for the `id` or `class` attributes is easy.  What
about the other attributes?

~~~ {.css}
/* Attribute exists */
input[placeholder] {
  color: #eee;
}

/* Attribute has exact value */
input[type="number"] {
  border: none;
}

/* Attribute contains substring */
a[href*="salesforce.com"] {
  font-weight: bold;
}
~~~

### Available Operators

 Operator  Description         Example
 --------- ------------        ----------
 `=`       Exact match         `[type="text"]`
 `~=`      Contains word       `[class~="foo"]`
 `|=`      Prefix before dash  `[lang|="en"]`
 `^=`      Begins with         `[href^="http://"]`
 `$=`      Ends with           `[href$=".pdf"]`
 `*=`      Contains substring  `[href*="salesforce.com"]`

<div class="notes">

For more information and more complete examples, see [@W3CSel].

</div>

### Exercise: Attribute Selectors

  #. Open (and edit) the following file in your text editor:

        www/selectors/part-05.css

  #. Review (but don't edit) the following file:

        www/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

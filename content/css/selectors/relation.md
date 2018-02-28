## Siblings, Children, and Descendants

### Descendant Selector

  * HTML:

    ~~~ {.html insert="../../../src/examples/css/descendants.html" token="ul"}
    ~~~

  * CSS:

    ~~~ {.css}
    article ul { /* ... */ }
    ~~~

  * Match all `<ul>` decedents of `<article>`

### Child Selector

  * HTML:

    ~~~ {.html insert="../../../src/examples/css/descendants.html" token="ul"}
    ~~~

  * CSS:

    ~~~ {.css}
    article > ul { /* ... */ }
    ~~~

  * Match `<ul>` decedents of `<article>` that are direct children

### Sibling Selector

  * HTML:

    ~~~ {.html insert="../../../src/examples/css/descendants.html" token="sib"}
    ~~~

  * CSS:

    ~~~ {.css}
    h2 + p { /* ... */ }
    ~~~

  * Match the `<p>` elements that immediately follow a `<h2>` (next
    sibling)

### General Sibling Selector

  * HTML:

    ~~~ {.html insert="../../../src/examples/css/descendants.html" token="general"}
    ~~~

  * CSS:

    ~~~ {.css}
    p ~ ol { /* ... */ }
    ~~~

  * Match all `<ol>` siblings that come after a `<p>`

### Exercise: Siblings, Children, and Descendants

  #. Open (and edit) the following file in your text editor:

        src/www/css/selectors/part-01.css

  #. Review (but don't edit) the following file:

        src/www/css/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

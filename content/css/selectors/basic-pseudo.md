## Pseudo Classes and Elements

### Pseudo What?

  * Advanced selectors that use the element's state or relative
    location

  * Can also select non-elements (e.g., paragraph text)

  * Begin with a colon (`:`) instead of a dot (`.`)

  * (Pseudo elements now start with two colons (`::`))

### Pseudo Class Example

~~~ {.css insert="../../../src/examples/css/focus.html" token="css"}
~~~

<div class="notes">

  * Pseudo classes act like the browser is adding and removing classes
    on elements when the state of the browser changes

  * When an input has the keyboard focus it will match the `:focus`
    pseudo class

</div>


### Pseudo Element Example

~~~ {.css insert="../../../src/examples/css/paragraph.html" token="css"}
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

        src/www/css/selectors/part-02.css

  #. Review (but don't edit) the following file:

        src/www/css/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

## Flexible Grids

### Designing with a Grid

A powerful design technique from the print world involves using a grid
to divide the page into rows and columns.  This also works well for
the web.

  * Slice the page into a series of rows

  * Each row is then split into columns

  * The number of columns varies from row to row

### Flexible Grid Example

  * The first row contains two columns:

    #. Company logo (50%)
    #. Site navigation (50%)

  * The next row contains three columns:

    #. Left sidebar (25%)
    #. Main content (50%)
    #. Right sidebar (25%)

  * The final row contains a single column:

    #. The footer (100%)

### Grid Systems

  * Straight forward to make responsive:
    * Small screens are limited to one column
    * Bigger screens can have more columns

  * Automatically add space between columns

  * Usually divide the screen into twelve units

  * Columns can occupy between one and twelve units

  * Class names map to unit numbers:

    ~~~ {.html}
    <div class="three columns">
    ~~~

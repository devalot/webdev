## Flexible Boxes

### A Layout Engine for the Modern Web

  * Easy to use with visually pleasing defaults

  * Similar to a grid system, but easier to use

  * No weird CSS tricks or class names to learn

  * Universally supported (IE >= 11)

### Flexible Boxes: The Basics

  * Mark a container element as a flexible box:

    ~~~ {.css}
    .container { display: flex; }
    ~~~

  * All children then become *flex items*

  * Flex items can be laid out in rows or columns

  * Wide range of alignment, sizing, and wrapping options

### Flex Item Layout

  * Items side-by-side, left to right (default):

    ~~~ {.css}
    .container {
      display: flex;
      flex-direction: row;  /* or row-reverse */
    }
    ~~~

  * Items stacked top to bottom:

    ~~~ {.css}
    .container {
      display: flex;
      flex-direction: column; /* or column-reverse */
    }
    ~~~

### Flex Direction Orientation

Since flex can layout items in a row or a column it uses generic terms
to refer to its axes:

  * Main axis vs. cross axis
    - For row: main is horizontal, cross is vertical
    - For column: main is vertical, cross is horizontal

  * Main start and end, vs. cross start and cross end
    - For row: main start is on the left
    - For row-reverse: main start is on the right

### Flex Item Wrapping

  * Items must all be on the same line (row):

    ~~~ {.css}
    .container {
      display: flex;
      flex-wrap: nowrap; /* This is the default */
    }
    ~~~

  * Items are allowed to wrap onto the next line:

    ~~~ {.css}
    .container {
      display: flex;
      flex-wrap: wrap; /* or wrap-reverse */
    }
    ~~~

### Flex Item Sizing

The `flex-grow`, `flex-shrink`, and `flex-basis` properties control
the width of flex items relative to their siblings.

  * Make all flex items the same width:

    ~~~ {.css}
    .container {
      display: flex;

      /* flex-grow flex-shrink flex-basis */
      flex: 1 1 250px;
    }
    ~~~

  * Make the second item take up twice as much space as the others:

    ~~~ {.css}
    .container               { display: flex; }
    .container > *           {    flex: 1;    }
    .container :nth-child(2) {    flex: 2;    }
    ~~~

### A Word About `flex-basis`

This property can be a bit tricky to understand.  It's not your fault,
it's complicated!

  * Definition: The *initial* size of a flex item.

  * The default value (today): `auto`

  * Most common value: An absolute or relative measurement

  * Future values: `min-content`, `max-content`, `stretch-fit`.

### Flex Grow: Extra Space

![](../../../diagrams/css/flex-extra-space.svg)\
<!-- Prevent the image above from turning into a figure. -->

### Flex Grow: Uniform Growth

![](../../../diagrams/css/flex-grow.svg)\
<!-- Prevent the image above from turning into a figure. -->

### Flex Grow: Nonuniform Growth

![](../../../diagrams/css/flex-grow2.svg)\
<!-- Prevent the image above from turning into a figure. -->

### Flex Item Ordering

Items inside a flex container can be displayed in a different order
than they appear in the HTML source code.  This is done with the
`order` property:

~~~ {.css}
.container         { display: flex; }
.sidebar.primary   {   order: 1;    }
.main              {   order: 2;    }
.sidebar.secondary {   order: 3;    }
~~~

<div class="notes">

This is useful for placing the sidebars at the end of the HTML.
Screen readers will be able to start reading the main content first,
but visually the sidebars can be moved somewhere else.

</div>

### Flex Alignment

`justify-content`:

  : How space is distributed around and between items on the main
    axis.  Requires that all flex items have a `flex-grow` of zero.

    Useful values; `space-between`, `space-around`, `space-evenly`,
    `flex-start` (the default), and `flex-end`.

`align-items`:

  : How space is distributed around and between items on the cross
    axis.  Used when flex items have different cross axis sizes.

    Useful values: `stretch` (the default), `center`, `flex-start`
    `flex-end`.

`align-content`:

  : How space is distributed around and between multiple lines on the
    main axis created by wrapping.

    Useful values: `stretch` (the default), and all values form
    `justify-content`.

### Flex Container and Item Properties

  Container          Item
  -----------        -----------
  `flex-flow`        `order`
  `flex-direction`   `align-self`
  `flex-wrap`        `flex`
  `justify-content`  `flex-grow`
  `align-items`      `flex-shrink`
  `align-content`    `flex-basis`

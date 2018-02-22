# CSS Page Layout

## Introduction to Page Layout

### What is CSS Page Layout?

  * HTML files specify a bunch of boxes with content

  * The browser needs to arrange those boxes on the screen

  * Arrangement is performed based on a set of layout rules

  * The layout can be changed in CSS, per box

### Layout Engines

We'll be looking at the following layout engines:

  * Block (`display: block|inline`)

  * Positioned (`position: absolute|relative|fixed`)

  * Floating (`float: left|right`)

  * Flexible Box (`display: flex`)

## Block Layout

### The Default: Block/Inline

  * Elements are either block or inline

  * Block elements stack on top of one another

  * Inline elements flow inside a block element

  * This is the default layout engine

  * Good for articles, not so good for applications

### Introduction to the Box Model

Open the following file in your web browser:

    www/box-model/index.html

  * Block elements have newlines before and after their content

  * Inline elements flow in the content of a block element.

## Positioned Layouts

### Positioned Boxes

  * Boxes can be pulled out of the normal flow of the HTML

  * You can position them in specific locations

  * Goal: achieve better compatibility with print designs

### Absolutely Positioned Boxes

  * Boxes are completely removed from flow of the page

  * They can be positioned using any corner of the box

  * Position is relative to nearest positioned ancestor

  * Good for placing elements relative to a parent

  * Good for images that flow/stack over other element

### Relatively Positioned Boxes

  * Boxes are moved from current location, leaving a "hole"

  * They can be positioned using any corner of the box

  * Position is relative to the boxes original location

  * Mostly used to set an anchor point for absolutely positioned children

### Fixed Position Boxes

  * Locked to a specific screen location

  * Scrolling the page doesn't change box location

  * Boxes are completely removed from the page flow

  * Position is relative to browser window

  * Good for fixed navigation bar or page banner

### Stacking Issues

  * Positioning leads to boxes stack on top of other boxes

  * You can control the stacking order with the `z-index` property

  * The larger the value the higher a box is in stack

  * Negative `z-index` values can be used to force a box to be
    underneath all other boxes

## Floating Layouts

### Floated Boxes

  * Boxes can be floated so they are side-by-side with their siblings

  * Sibling boxes will wrap around the floated box

  * Boxes can be floated to the left or the right

### Using the Floating Layout

Float boxes with the `float` property:

~~~ {.css}
.sidebar {
  float: left; /* left, right, or none  */
  width: 25%;  /* remember to set width */
  margin-right: 1em; /* Push the main content away */
}


footer {
  clear: both; /* Stop the floating */
}
~~~

### Problem: Float Drop

  * Boxes are dropping below the floated box instead of side-by-side

  * Set a width for all of the floated boxes

  * Keep the box model in mind (border, margin, padding, etc.)

  * You can also make the browser include the entire box in the width:

    ~~~ {.css}
    * {
      box-sizing: border-box;
    }
    ~~~

### Problem: Floating Siblings

  * Floated boxes can escape their parent and continue to float other
    boxes (when the floated box is the biggest child)

  * Make the parent enclose and clear the float:

    ~~~ {.css}
    .container::after {
      content: " ";
      display: table;
      clear:   both;
    }
    ~~~

## Responsive Design

### So Many Browser Sizes, One HTML File

  * Fixed design: Treating the web like paper

  * Liquid design: Better but more complicated

  * Responsive: Adapt to each browser

### Mobile Browsers and Zooming

  * Mobile browsers automatically zoom out to show all content

  * The first step to making a site responsive is to disable this

  * Use the following `meta` tag in the `head` of your HTML:

    ~~~ {.html}
    <meta name="viewport" content="width=device-width">
    ~~~

  * With that, browsers will respect width requests without zooming

### Relative Measurements

  * Avoid using absolute units such as `px`, `pt`, `cm`, `in`, `mm`, etc.

  * Relative to current font size: `em`

  * Relative to parent element size: `%`

  * Percentages + Media Queries = Responsive Web Design

### Introduction to Media Queries

  * Media Queries are part of CSS

  * They are like `if` statements in your CSS

  * Example:

    ~~~ {.css}
    /* If the browser window is at least 400px wide... */
    @media (min-width: 400px) {
      .sidebar {
        float: left;
        width: 25%;
      }
    }
    ~~~

### Compound Media Queries

Media queries can be combined with `and`:

~~~ {.css}
@media (min-width: 400px) and (orientation: portrait) {
  /* ... */
}
~~~

<div class="notes">

(You can also use the `only` and `not` tokens.  See [@W3CMediaQ] for
more details.)

</div>

### Media Queries and Breakpoints

Set media query breakpoints---divisions of screen width that change
the CSS:

~~~ {.css}
@media (max-width: 480px) {
  /* Small screens */
}

@media (min-width: 481px) and (max-width: 768px) {
  /* Medium screens */
}

@media (min-width: 769px) {
  /* Larger screens */
}

/* Etc. */
~~~

### Mobile First, or Desktop First?

There are two ways to approach responsive web design:

  #. Design for small screens and use media queries to adapt the
     design for larger screens

  #. Start with a design for large screens and use media queries to
     scale the design down to smaller screens

### Fluid Images

  * Automatically scale images to match the container width:

    ~~~ {.css}
    img { max-width: 100%; }
    ~~~

  * For this to work, don't use `width` or `height` attributes on an
    `img` tag:

    ~~~ {.html}
    <img src="logo.jpg" alt="Logo">
    ~~~

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

![](../../diagrams/css/flex-extra-space.svg)\
<!-- Prevent the image above from turning into a figure. -->

### Flex Grow: Uniform Growth

![](../../diagrams/css/flex-grow.svg)\
<!-- Prevent the image above from turning into a figure. -->

### Flex Grow: Nonuniform Growth

![](../../diagrams/css/flex-grow2.svg)\
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

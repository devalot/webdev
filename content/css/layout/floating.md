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

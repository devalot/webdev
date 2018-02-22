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

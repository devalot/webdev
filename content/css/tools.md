# Using CSS Tools and Frameworks

## Preprocessors

### What Does a Preprocessor Do?

  * Preprocessors add extra features to CSS or provide a totally
    different styling language for you to use

  * They read your styling file and produce a standard CSS file

  * A few will even validate your CSS against the standard

  * Can automatically add vendor prefixes as necessary, etc.

### Introduction to Sass

Syntactically Awesome Style Sheets (Sass) is an extension language to
CSS providing several features:

  * Variables (an extremely useful feature)

  * Predefined functions for math, color blending, string
    manipulation, etc.

  * Rule nesting (place one selector inside another)

  * Property nesting (avoid repeating property prefixes)

### Sass Variables

Typically, variables are set at the top of the file, or in a separate
file:

~~~
$main-background-color: #eee;
$main-foreground-color: #888;
~~~

Then used throughout the rest of the file:

~~~ {.css}
body {
  background-color: $main-background-color;
  color: $main-foreground-color;
}
~~~

### CSS without Preprocessors: Variables

<div class="notes">

CSS variables were standardized by the W3C in 2015.  Browser support
is poor (i.e. not supported in IE) but hopefully that will change.

</div>

~~~ {.css}
:root {
  /* Set some CSS variables: */
  --primary-color:   #0000ff;
  --secondary-color: #ff0000;
}

.banner {
  /* Expand a variable via `var': */
  background-color: var(--primary-color);
}
~~~

### Popular Preprocessors

  * Autoprefixer [-@Autoprefixer]

  * Sass [-@Sass]

  * Less [-@Less]

  * Myth [-@Myth]

## Frameworks

### Bootstrap

  * Provides a flexible grid system

  * Built in response design

  * Includes styling for common components

  * Lots of websites use Bootstrap, and therefore look very similar

### Popular Frameworks

  * Bootstrap

  * Compass

  * Bourbon

  * Susy

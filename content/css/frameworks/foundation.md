## Foundation

[Foundation][] is CSS framework.  Its goals are to significantly
reduce the amount of CSS you have to write and give you a consistent,
clean web site by default.

### What is (ZURB) Foundation?

  * A framework for CSS

  * Mobile-first design

  * Provides:

    - A grid system
    - A navigation system
    - UI controls (buttons, sliders, etc.)
    - Various pre-styled containers

  * Configurable via Sass, HTML, and JavaScript

### The Foundation Grid

The main grid system in Foundation `<=` 5.

~~~ {.html}
<div class="row">
  <div class="large-4 columns">
    Column with 4 Units.
  </div>
  <div class="large-8 columns">
    Column with 8 Units.
  </div>
</div>
~~~

(Internally implemented with Floating or Flexbox.)

### The XY Grid

The main grid system in Foundation `>=` 6.

~~~ {.html}
<div class="grid-container">
  <div class="grid-x">
    <div class="cell small-4">A Cell</div>
    <div class="cell small-4">A Cell</div>
    <div class="cell small-4">A Cell</div>
  </div>
</div>
~~~

(Internally implemented with Flexbox.)

### User Interface Controls

Foundation provides a variety of user interface elements:

  * Buttons

  * Switches

  * Sliders

  * Menus

  * Navigation bars

  * Breadcrumbs

  * etc.

### Buttons

![](../../../diagrams/css/foundation-button.png)\
<!-- Placeholder -->

~~~ {.html insert="../../../src/www/css/frameworks/foundation5/index.html" token="button"}
~~~

### Split Buttons

![](../../../diagrams/css/foundation-split.png)\
<!-- Placeholder -->

~~~ {.html insert="../../../src/www/css/frameworks/foundation5/index.html" token="split"}
~~~

### Switches

![](../../../diagrams/css/foundation-switch.png)\
<!-- Placeholder -->

~~~ {.html insert="../../../src/www/css/frameworks/foundation5/index.html" token="switch"}
~~~

### Sliders

![](../../../diagrams/css/foundation-slider.png)\
<!-- Placeholder -->

~~~ {.html insert="../../../src/www/css/frameworks/foundation5/index.html" token="slider"}
~~~

(There are also progress bars in Foundation.)

### Foundation and Sass

Foundation is written in Sass and JavaScript.  With the full Sass
distribution of Foundation you can:

  * Change settings and colors (`_settings.scss`)

  * Recompile with Grunt, Gulp, Webpack, etc.

  * Have more control over which parts of Foundation you include in
    your project (i.e. reduce its size)

### Experimenting with Foundation

Let's take a look at a Foundation demonstration application:

  #. Open the following folder in your text editor:

        src/www/css/frameworks/foundation5

  #. Review the `index.html` file

If you are running your Node.js server you can access this
application [using this link][foundation5-demo].

<!-- === Links === -->
[foundation]: https://foundation.zurb.com
[foundation5-demo]: http://localhost:3000/css/frameworks/foundation5/

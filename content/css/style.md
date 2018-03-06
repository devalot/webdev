## Advanced Font Tricks

### Specifying Fonts

~~~ {.css}
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
~~~

<div class="notes">

  * To see the difference between serif and sans-serif fonts, take a
    look at the `examples/serif.html` file.

</div>

### Using Web Fonts

~~~ {.css}
/* Create a new font-family */
@font-face {
  font-family: "My Font Name";
  src: url(/fonts/myfont.woff);
}

/* Then use it */
html {
  font-family: "My Font Name";
}
~~~

### Web Font Services

Example using Google Fonts:

  * HTML:

    ~~~ {.html}
    <link
     href="https://fonts.googleapis.com/css?family=Indie+Flower"
     rel="stylesheet">
    ~~~


  * CSS:

    ~~~ {.css}
    html { font-family: "Indie Flower"; }
    ~~~

## Using Images in CSS

### Background Image Properties

`background-image`:
  ~ The URL of the image.

    <div class="notes">

    Examples:

      * `background-image: url(image.jpg);`
      * `background-image: none;`

    </div>

`background-position`:
  ~ Absolute or relative position of background.

    <div class="notes">

    Examples:

      * `background-position: 50% 50%;`
      * `background-position: top;`

    </div>

`background-origin`:
  ~ Controls where the background image is initially placed.  That is,
    it's upper-left origin.

    <div class="notes">

    Examples:

      * `background-origin: border-box;` Extend background to (and
        underneath) the border.

      * `background-origin: padding-box;` Extend background to the
        outside edge of the padding space. (Default value.)

      * `background-origin: content-box;`  Clip the background to the
        content box.

    </div>

<!-- Useful tip: transparent border:
border: 10px solid rgba(255, 255, 255, 0.2);
background-repeat: no-repeat;
-->

`background-size`:
  ~ Constrain the size of an image, or scale the image up or down.

    <div class="notes">

    Examples:

      * `background-size: 50%;` (Uniform scale.)
      * `background-size: 25% 50%;` (Scale on `x` and `y`.)
      * `background-size: contain;` (Fit image.)
      * `background-size: cover;` (Clip image.)

    </div>

`background-repeat`:
  ~ How to tile images smaller than the container.

    <div class="notes">

    Examples:

      * `background-repeat: repeat;` (Default value.)
      * `background-repeat: repeat-x;` (Or `repeat-y`.)
      * `background-repeat: no-repeat;`
      * `background-repeat: space;` (Repeat without clipping.)
      * `background-repeat: round;` (Stretch repeating.)

    </div>

`background-clip`:
  ~ Which bounding box the background (image or color) will be clipped to.

    <div class="notes">

    Examples:

      * `background-clip: border-box; (Default value.)`
      * `background-clip: padding-box;`
      * `background-clip: content-box;`

    </div>

<!-- Useful tip: transparent border:
border: 10px solid rgba(255, 255, 255, 0.2);
background-repeat: no-repeat;
-->

`background-attachment`:
  ~ Control image location when scrolling.

    <div class="notes">

    Examples:

      * `background-attachment: scroll;` (Default value.)
      * `background-attachment: fixed;` (Don't move with parent.)

    </div>

### Exercise: Background Images

  #. Open (and edit) the following file in your text editor:

        www/background-image/index.css

  #. Review (but don't edit) the following file:

        www/background-image/index.html

  #. Modify the CSS so that your browser shows the same page as the
     one on the instructor's screen

  #. Open the HTML file in your browser and confirm your changes

<!-- Solution: solutions/css/cssfund/www/background-image/index.css -->

### Image Sprites

  * Several images stored in a single file

  * Size the parent element to the size of a single image

  * Changing `background-position` will change which image is show

  * Can be animated with CSS or JavaScript

### Exercise: Icons

  #. Open (and edit) the following file in your text editor:

        www/icons/index.css

  #. Review (but don't edit) the following file:

        www/icons/index.html

  #. Make each `<LI>` show only it's designated icon.

  #. Open the HTML file in your browser and confirm your changes

<div class="notes">

### Isolating a Single Frame of the Spinner Sprite

~~~ {.css}
.spinner {
  /* The background image: */
  background-image: url(../images/spinner.png);

  /* Turn off image tiling: */
  background-repeat: no-repeat;

  /* Force the container size to a single frame: */
  width:  156px;
  height: 156px;

  /* Move halfway between frames 1 and 2: */
  background-position: 0 -78px;
}
~~~

</div>

### Embedded Images

Images can be encoded using Base64 and directly embedded in a CSS
file:

~~~ {.css}
.logo {
  background-image:
    url(data:image/png;base64,ENCODED-DATA-GOES-HERE);
}
~~~

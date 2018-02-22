# Transforms, Transitions, and Animations

## CSS Animation Basics

### Major Animation Components

Transforms:
  ~ Primitive operations like rotation and scaling

Transitions:
  ~ Animate the change between two sets of styles

Animations:
  ~ Complex animations between any number of styles

## Transforms

### Requesting a Transform

~~~ {.css}
.side-banner {
  transform: rotate(90deg);
}
~~~

### Transform Operations

Rotation:
  ~ `rotate(90deg)`: Positive rotation is clockwise

Scaling:
  ~ `scale(2)`: Multiply current size by the given number

Translation:
  ~ `translate(10px, 10px)`: Move by given amount

Skewing:
  ~ `skew(15deg, 0)`: Slant lines by the given angle

### Putting It All Together

  * Transformed elements don't affect the flow of other elements
    (i.e. they leave a hole)

  * The default origin for transformations is the center of the
    element and can be changed with:

    ~~~ {.css}
    .foo { transform-origin: left top; }
    ~~~

  * Multiple transforms can be specified:

    ~~~ {.css}
    .foo { transform: rotate(45deg) scale(0.9); }
    ~~~

## Transitions

### Transition Ingredients

  #. Two styles, the *beginning* style and the *ending* style

  #. Typically the ending style uses a pseudo-class such as `:hover`

  #. When triggered the browser will animate the transition

  #. The `transition-property` and `transition-duration` properties
     are placed on the beginning style

### Transition Example

~~~ {.css
insert="../../src/examples/css/transition.html" token="css"}
~~~

### Transition Timing

  * The `transition-duration` property controls how long the entire
    animation will last.

  * The `transition-timing-function` property controls the rate at
    which the animation progresses and changes

  * Built-in values include:

    * `ease` (default)
    * `ease-in`
    * `ease-out`
    * `ease-in-out`
    * `linear`
    * `cubic-bezier` (gives you total control)

## Animations

### Animations: Better Transitions

  * Like transitions except you can have more than two styles

  * Can be triggered like transitions or started on page load

  * Easier to reuse with other elements

  * Better timing control compared to transitions

### Defining Animation Steps

Animations are given a name and series of steps (known as keyframes)
using the `@keyframes` *at rule*:

~~~ {.css insert="../../src/examples/css/keyframes.html" token="keyframes"}
~~~

### Using an Animation

An animation can be added to any element in order to get it to start
when the page loads:

~~~ {.css insert="../../src/examples/css/keyframes.html" token="using"}
~~~

You can also trigger an animation using a pseudo-class or via
JavaScript.

### Animation Properties

`animation-duration`:
  ~ Total length of time the animation runs from start to finish
    (0%--100%).

`animation-timing-function`:
  ~ Control rate of change (can also be used in keyframes to override
    the timing function for each stage of the animation).

`animation-delay`:
  ~ Optional time to wait before starting the animation (default is `0s`).

`animation-iteration-count`:
  ~ Number of times to run the animation, or `infinite` to continually
    repeat the animation.

`animation-direction`:
  ~ Direction through the keyframes (the `alternate` value means to go
    forwards and backwards).  Other values include `normal` and
    `reverse`.

`animation-fill-mode`:
  ~ Which state to leave the element in (`forwards` means keep the
    element in the state it was in at the last keyframe).

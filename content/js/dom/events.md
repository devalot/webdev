## Event Handling and Callbacks

### Events Overview

* Events can be click, hover, key press, focus, form submit, etc.
* Events are received in a synchronous "event loop":
    * JS runtime hangs out, quietly waiting for events
    * Events fire and trigger registered handler functions
    * Handler functions run synchronously

### Most Common Events

* click
* change
* keydown
* submit

(Example: `src/examples/js/events.html`)

### Slightly More Comprehensive List

* UI: load, unload, error, resize, scroll
* Keyboard: keydown, keyup, keypress
* Mouse: click, dblclick, mousedown, mouseup, mousemove
* Touch: touchstart, touchend, touchcancel, touchleave, touchmove
* Focus: focus, blur
* Form: input, change, submit, reset, select, cut, copy, paste

### Handling Events

  #. Get the element to monitor
  
      * `document.getElementBy...`

  #. Register a function for an event on that element
  
      * `.addEventListener('event', handler)`

### Event Registration

```
const button = document.getElementById('greet')

button.addEventListener('click', () => {
  alert('Hello!')
})
```

### Event Bubbling

* Events propagate from the target node upwards
* Called **bubbling**

```html
<form onclick="console.log('form')">FORM
  <div onclick="console.log('div')">DIV
    <p onclick="console.log('p')">P</p>
  </div>
</form>
```

Clicking `<p>`:   `P  DIV  FORM`

Clicking `<div>`:    `DIV  FORM`

### Event Bubbling

* Bubbling can be prevented with `event.stopPropagation`

```html
<body onclick="console.log('Will not be reached')">
  <button>Click me</button>
</body>
```

```javascript
button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('button clicked')
})
```

Clicking `<button>`:  `button clicked`

### Sidenote

We're using `onclick` for terse examples

Generally **only** use `addEventListener`

### Browser Default Action

* The browser has a default action for many events, e.g.
    * `submit` will `POST` to the `form` `action` url
    * Clicking a link will load a new page
* Default action prevented with `event.preventDefault`

### Event Delegation

```html
<ul>
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
</ul>
```

Repeated registered handlers. :-(

~~~ {.javascript insert="../../../src/examples/js/events.js" token="multiple-handlers"}
~~~

### Event Delegation

What happens if another `li` is added dynamically

and then clicked?

(Example: `src/examples/js/events.html`)

### Event Delegation

Event handler `event` knows two things:

* **`currentTarget`**: Where it's registered
* **`target`**: Who triggered the event

### Event Delegation

\begin{figure}
  How can we use this to our advantage?
\end{figure}

### Event Delegation

Put the handler on the parent

~~~ {.javascript insert="../../../src/examples/js/events.js" token="parent-delegation"}
~~~

### Functions Given Context of Event

Event handlers are given context of that element.

```js
document.getElementsByTagName('button')
  .addEventListener('click', function() {
    console.log(this) // the button that was clicked
  })
```

Arrow functions won't work here.

```js
document.getElementsByTagName('button')
  .addEventListener('click', () => {
    console.log(this) // window  :-(
  })
```

### Functions Given Context of Event

Easy solution is to use `event.currentTarget`.

```js
document.getElementsByTagName('button')
  .addEventListener('click', (event) => {
    console.log(event.currentTarget) // the button
  })
```

### Functions Given Context of Event

Moral of the story: `this` **can** be more expressive

...but mostly it causes confusion. Avoid it when possible.

### Event Debouncing and Throttling

Given an event handler...

* Debounce: group many events into a single execution
* Throttle: limit executions to X for a time window

~~~ {.javascript insert="../../../src/examples/js/events.js" token="event-limiting"}
~~~

(Example: `src/examples/js/events.html`)

### Exercise: Simple User Interaction

  #. Open the following files in your text editor:

     - `src/www/js/events/events.js`

     - `src/www/js/events/index.html` (read only!)

  #. Open the `index.html` file in your web browser.

  #. Complete the exercise.

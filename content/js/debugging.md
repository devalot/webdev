## Debugging in the Browser

### Introduction to Debugging

  - All modern browsers have built-in JavaScript debuggers

  - We've been using the debugging console the entire time!

### Browser Debugging with the Console

  - The `console` object:
    -   Typically on `window` (doesn't always exist)
    -   Methods
        -   `log`, `info`, `warn`, and `error`
        -   `table(object)`
        -   `group(name)` and `groupEnd()`
        -   `assert(boolean, message)`

### Console Tricks

  - `$_` the value of the last evaluation

  - `$0`---`$4` last inspected elements in historical order

  - `$("selector")` returns first matching node (CSS selector)

  - `$$("selector")` returns all matching nodes

  - `debug(function)` sets a breakpoint in `function`

  - `monitor(function)` trace calls to `function`

<div class="notes">

See the [Chrome Command Line Reference][chrome-cmdln] for more details.

[chrome-cmdln]: https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference

</div>

### Accessing the Debugger

  - In the browser's debugging window, choose **Scripts**

  - You should be able to see JavaScript files used for the current site

### Setting Breakpoints

  - Debugger with breakpoints

  - <http://jsfiddle.net/mrmorris/X76Gq/>

### Stepping Through Code

  - After setting breakpoints, you can reload the page (or trigger a
    function)

  - Once the debugger stops on a breakpoint you can step through the
    code using the buttons in the debugger

    - Step In: Jump into the current function call and debug it
    - Step Over: Jump over the current function call
    - Step Out: Jump out of the current function

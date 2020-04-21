## Manually Setting Context

### `Function.prototype.call` ### {#call}

Calling a function and explicitly setting `this`:

~~~ {.javascript insert="../../../src/examples/js/call.js"}
~~~

### `Function.prototype.apply` ### {#apply}

The `apply` method is similar to `call` except that additional
arguments are given with an array:

~~~ {.javascript insert="../../../src/examples/js/apply.js"}
~~~

### `Function.prototype.bind` ### {#bind}

The `bind` method creates a new function which ensures your original
function is always invoked with `this` set as you desire, as well as
any arguments you want to supply:

~~~ {.javascript insert="../../../src/examples/js/bind.js" token="simple"}
~~~

<div class="notes">

A common use of the `bind` function is to ensure that `this` is set
correctly when using a function as a callback.  For example:

~~~ {.javascript insert="../../../src/examples/js/bind.js" token="callback"}
~~~

</div>

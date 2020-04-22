Introspection and Reflection
----------------------------

### Simple Introspection Techniques ###


  * The `instanceof` Operator:

    <div class="notes">

    Returns `true` if the left operand was constructed with the
    function given as the right operand.

    </div>

    ~~~ {.javascript}
    // Returns `true':
    [1, 2, 3] instanceof Array;
    ~~~

  * The `Object.getPrototypeOf` Function:

    <div class="notes">

    Returns the prototype (i.e. the `__proto__` property) of the
    argument.

    </div>

    ~~~ {.javascript}
    // Returns `Array.prototype':
    Object.getPrototypeOf([1, 2, 3]);
    ~~~

  * `constructor` property:
  
    ~~~ {.javascript}
    const foo = function foo() {}
    const f = new foo()
    f.constructor === foo
    ~~~

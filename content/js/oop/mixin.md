Multiple Inheritance via Mixins
-------------------------------

### What is a Mixin? ###

  * Simulates multiple inheritance

  * Properties from interesting objects are copied into the target
    object, making the target object appear to be made up of the
    interesting objects.

  * All the same problems you get with real multiple inheritance, but
    without any of the built-in solutions to resolve them.

### Using the Mixin Technique ###

~~~ {.javascript insert="../../src/examples/js/mixin.js" token="usage"}
~~~

### Writing the Mixin Machinery ###

~~~ {.javascript insert="../../src/examples/js/mixin.js" token="mixin"}
~~~

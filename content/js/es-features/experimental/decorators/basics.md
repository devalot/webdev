### What are Decorators? ###

Decorators provide an official mechanism in JavaScript for
metaprogramming.  In other words, they add the ability for run-time
code generation.

  * Functions that generate code

  * Are given an object that fully describes the code from which they
    were invoked

  * Are invoked by using `@` in front of their name, and placed before
    classes, methods, properties, etc.

### Example Decorator ###

~~~ {.javascript insert="../../../../../src/examples/es-features/esNEXT/decorators.js" token="deco"}
~~~

### Using the Decorator ###

~~~ {.javascript insert="../../../../../src/examples/es-features/esNEXT/decorators.js" token="class"}
~~~

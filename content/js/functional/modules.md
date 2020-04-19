Modules
-------

### Modules, Namespaces, and Packages ###

  * Organize logical units of functionality

  * Prevent namespace clutter and collisions

  * Several options for module implementation

    - The module pattern
    - CommonJS modules
    - ES2015 modules

### Immediately-Invoked Function Expressions: Basics ### {#iife-short}

The module pattern:

~~~ {.javascript insert="../../../src/examples/js/iife.js" token="short"}
~~~

### Example: Module Pattern ### {#iife-modules}

~~~ {.javascript include="../../../src/examples/js/module.js"}
~~~

### Exercise: Using IIFEs to Make Private Functions ###

  #. Open the following file:

        src/www/js/hosts/hosts.js

  #. Follow the instructions inside the file

  #. Open the `index.html` file for the tests

### Defining ES2015 Modules ###

~~~ {.javascript insert="../../../src/examples/es-features/es2015/module.js"}
~~~

### Using ES2015 Modules ###

~~~ {.javascript insert="../../../src/examples/es-features/es2015/import.js"}
~~~

### ES2015 Module Notes ###

  * Not very practical on the client (browser)

  * Best as part of the development process:

    - Flattened using a tool such as webpack

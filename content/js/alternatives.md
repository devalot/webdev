## Alternatives and Extensions to JavaScript

### Languages that Compile to JavaScript

  * [PureScript](http://www.purescript.org/)

  * [Flow](http://flowtype.org/)

  * [TypeScript](http://www.typescriptlang.org/)

  * [Dart](https://www.dartlang.org/)

### PureScript

  * Purely functional programming language that compiles to JS

  * Strong, static type system (similar to Haskell)

  * Clean, human-readable JavaScript output

  * Lots of open source modules for PureScript

### Flow

  * Language extension to JavaScript

  * Standalone static type checking system

  * Runs as part of your build process

  * Uses Babel to transpile to standard JavaScript

  * Sponsored by Facebook

### Flow Features

  * Type inference (no type annotations required)

  * Syntax for type annotations so you can be explicit

  * Automatic `null` checking

  * Enabled per-file or per-function

### What Does it Look Like?

Adding types to a function:

~~~ {.javascript insert="../../src/www/js/alternatives/flow/add.js" token="add-func"}
~~~
~~~ {.javascript insert="../../src/www/js/alternatives/flow/add.js" token="add-call"}
~~~
~~~ {.javascript insert="../../src/www/js/alternatives/flow/add.js" token="add-return"}
~~~

### Using Flow

  #. Allow Flow to process a file by adding a comment flag:

    ~~~ {.javascript}
    // @flow
    ~~~

  #. Type check the code by running `flow check`

  #. Use Babel to remove the type annotations

### Flow Demo Application

  #. <http://localhost:3000/alternatives/flow/>

  #. `www/alternatives/flow`

  #. Before it will work you need to:

        $ npm install -g gulp-cli
        $ npm install
        $ gulp

### TypeScript

  * A language based on ESNEXT (classes, arrow functions, etc.)

  * All features compile to ES5

  * Same basic type-annotation syntax as Flow

  * Type inference and null-checking are weaker than Flow

  * Sponsored by Microsoft

### Dart

  * OOP Language standardized as ECMA-408

  * Optional type system

  * Requires a runtime system in JavaScript

  * Sponsored by Google

### Popular ES2015 to ES5 Transpilers

  * [Babel](https://babeljs.io/)

  * [Traceur](https://github.com/google/traceur-compiler)

### Looking to the Future

  * [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly)

### Introduction to Babel ###

  * Automated JavaScript restructuring, refactoring, and rewriting

  * Parses JavaScript into an Abstract Syntax Tree (AST)

  * The AST can be manipulated in JavaScript

  * Includes *presets* to convert from one form of JavaScript to another

    * ESNEXT to ES5

    * React's JSX files to ES5

    * Vue's VUE files to ES5

    * etc.

### Manually Using Babel ###

Process all files from the `input` directory and put all generated
files in the `output` directory:

~~~ {.shell}
$ npm install --save-dev babel-cli babel-preset-env
$ ./node_modules/.bin/babel --presets env -d output input
~~~

(Note: Babel 7 will use a slightly different command line.)

### Integrating Babel with Your Build Tools ###

Most build tools (Grunt, Gulp, Webpack) support a Babel phase.

Simple overview of a build process:

  #. Gather up all necessary JavaScript files

  #. Run the files through a linter like ESLint

  #. Concatenate them into a single file in the right order

  #. Run that file through Babel

  #. Minify and compress the file Babel produced

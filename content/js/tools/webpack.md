## Webpack

[Webpack][] is a powerful tool for managing all of the assets of a web
application.  It takes the place of traditional build tools such as
Maven, GNU Make, etc.

### What is Webpack?

A build tool for web applications:

  * Uses ES2015 modules to bundle JavaScript into a single file ready
    for deployment to production

  * Transpiles JavaScript (i.e. ES20* to ES5)

  * Lint code and run tests

  * Bundles many types of assets (CSS, HTML templates, etc.)

  * Can load remote assets on-demand

<!-- === Refresher on JavaScript Modules === -->
<<(../es2015.md#modules-export)
<<(../es2015.md#modules-why)

### Bundling JavaScript Modules

Webpack will:

  #. Start with your main JavaScript file

  #. Follow all `import` statements

  #. Generate a single file containing all JavaScript

The generated file is know as a *bundle*.

### More Power Through Loaders

Webpack becomes a full build tool via *loaders*.  Here are some
example [loaders][]:

`babel-loader`
  : Transpiles JavaScript using Babel

`eslint-loader`
  : Lints JavaScript using ESLint

`mocha-loader`
  : Run tests before building

`html-loader`
  : Bundle HTML templates

`sass-loader`
  : Process and bundle Sass

### Configuring Webpack

Webpack is configured through a JavaScript file named
`webpack.config.js`.  Using this file you can:

  * Tell Webpack what file is the main JavaScript file

  * Specify which loaders you are using and in which order

  * Add additional JavaScript snippets such as polyfills to the bundle

  * Go crazy since you are writing in JavaScript

### Webpack Demonstration

Let's take a look at a Webpack demonstration application:

  #. Open the following folder in your text editor:

        src/www/js/tools/webpack

  #. Review the example files:

     * `index.html`
     * `src/index.js`
     * `src/template.html`
     * `webpack.config.js`

  #. Build the application with:

        $ npm run build

If you are running your Node.js server you can access this
application at <http://localhost:3000/js/tools/webpack/>

<!-- === Links === -->
[webpack]: https://webpack.js.org/
[loaders]: https://webpack.js.org/loaders

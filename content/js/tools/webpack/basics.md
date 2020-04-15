### What is Webpack?

[Webpack](https://webpack.js.org/) is a build tool for web applications:

  * Bundles all JavaScript modules into a single browser-safe JS file

    * Browsers are still figuring out how to work with ES modules, and webpack does it better

  * Can be configured to process files as they're imported

    * Transpiling JS, linting, sizing images, etc.

  * Bring all your content into JS files (CSS, images, JSON, etc.)

### Other Benefits

  * Dev Server + Live Reloading

  * Hot Module Replacement

  * Source Maps

  * Caching

  * Code Splitting + Lazy-loading

  * Optimization (minification, tree-shaking, chunking)

### Bundling JavaScript Modules

Webpack will:

  #. Start with your "entry" JavaScript file

  #. Follow all `import` and `require` statements

  #. Generate a single file containing all JavaScript

The generated file is know as a *bundle*.

### Bundling JS

~~~ {.javascript}
// index.js
import { subtract } from './subtract'

const add = (a = 1, b = 2) => a + b

console.log(add(1, 2), subtract(8, 2))

// subtract.js
export const subtract = (a, b) => a - b
~~~

### Bundle Layout

![](images/webpack-bundle.jpg)

### Bundling Images

~~~ {.javascript}
import logo from './logo.jpg'

const component = () => {
  const element = document.createElement('div')

  const webpackLogo = new Image()
  webpackLogo.src = logo
  element.appendChild(webpackLogo)

  return element
}
~~~

### Bundling Images

![](images/webpack-image.png)

### Bundling Stylesheets

Now you can have localized stylesheets that connect to your JS.

Importing SCSS or CSS...

~~~ {.javascript}
// index.js
import './index.scss'
~~~

### Bundling Stylesheets

Can inject style sheets directly into the DOM for you.

~~~
/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.scss":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ...exports.push([module.i, \"\\n#root {\\n  background-color: lightblue;\\n}
...# sourceURL=webpack:///./src/index.scss?./node_modules/css-loader/dist/cjs.js");
~~~

Other performance optimizations are available.

### CSS Modules

Webpack will even help with CSS modules, if that's your jam.

~~~
/* style.css */
.className {
  color: green;
}
~~~

~~~ {.javascript}
import styles from "./style.css"

element.innerHTML = '<div class="' + styles.className + '">'
~~~

### More Power Through Loaders

Webpack becomes a full build tool via **[loaders](https://webpack.js.org/loaders)**.

`babel-loader`
  : Transpiles JavaScript using Babel

`file-loader`
  : Load files (JPG, PNG, etc.)

`css-loader`
  : Process CSS

`sass-loader`
  : Process and bundle Sass

`eslint-loader`
  : Lints JavaScript using ESLint

`html-loader`
  : Bundle HTML templates

### Configuring Webpack

Configuration file: `webpack.config.js`

  * `entry`: Tell Webpack what file is the main JavaScript file

  * `output`: Tell where to put the bundled assets

  * `module.rules`: Specify which files go through which loaders.
    Each `rule` takes

    * `test`: regex to see if it applies to the file

    * `loader`: what loaders to user

### Example Module Rules

~~~ {.javascript}
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,  // matches JS or JSX
      exclude: /(node_modules)/,  // don't transpile node_modules
      loader: 'babel-loader'  // run through babel-loader
    },
  ]
},
~~~

### Dev Server

TODO

### Webpack Demonstration

Let's take a look at a Webpack demonstration application:

  #. Open the `webpack-babel-starter-project` repo

    [https://github.com/AndrewSouthpaw/webpack-babel-starter-project](https://github.com/AndrewSouthpaw/webpack-babel-starter-project)

  #. Follow the "Build Your Own" README steps

  #. Add the ability to load an image

    * [Hint 1](https://lmgtfy.com/?q=webpack+image+loading)

    * [Hint 2](https://webpack.js.org/guides/asset-management/#loading-images)

### Resources

  * Webpack + Babel starter: [webpack-babel-starter-project](https://github.com/AndrewSouthpaw/webpack-babel-starter-project)
  * Frontend Masters: [Webpack Fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)
  * Frontend Masters: [Webpack Performance](https://frontendmasters.com/courses/performance-webpack/)

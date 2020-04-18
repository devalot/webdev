## Babel: Basics

### Before There Was Babel...

  * Each browser implements JavaScript specification

  * New syntax and features show up:

    * Arrow functions `() => {}`

    * Spread syntax `{ ...obj, foo: 'bar' }`

    * ... etc.

### Every Developer Be Like

![](images/please.jpg)

### Every Browser Be Like

  * Chrome, Firefox: Go For It!

  * Safari: Maybe I'll Do This

  * IE: I'll never do this

### Browser Compatibility

\begin{figure}
  If you want to support older browsers, you must use "older" JavaScript
\end{figure}

### Babel

![](images/babel-logo.png)

  * Write fancy new JavaScript

  * *Transpiles* into "older" JavaScript syntax

  * *Polyfills* missing functionality

  * Includes *presets* to convert from one form of JavaScript to another

      * ES2015+ to ES5

      * React's JSX files to ES5

      * Vue's VUE files to ES5

      * etc.

### What is Babel

  * Automated JavaScript restructuring, refactoring, and rewriting

  * Parses JavaScript into an Abstract Syntax Tree (AST)

  * The AST can be manipulated in JavaScript

### Plugins Galore

  * Community plugins to automatically transform your code

      * Compile TypeScript / Flow -> JavaScript

      * Manage feature flags

      * Improve module resolution

      * Augment language behavior (e.g. implicit `return`s)

### What Does Transpiling Look Like?

Given `add`, using modern default parameters...

```javascript
// add.js
export const add = (a = 1, b = 2) => a + b
```

Produces...

```javascript
var add = function add() {
  var a = arguments.length > 0 && arguments[0] !== undefined
    ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1] : 2;
  return a + b;
};
```

Which can be read by older browsers!

### Adding Babel

~~~ {.shell}
$ yarn add -D @babel/core @babel/cli @babel/preset-env
~~~

Add a `babel.config.js` at your root:

```javascript
module.exports = {
  presets: ['@babel/env']
}
```

### Babel Transpiling

~~~ {.shell}
$ yarn babel file.js
~~~

This transpiles a file and prints it to your console.

### Babel Transpiling

```shell
$ yarn babel src/add.js
```

Prints out:

```javascript
var add = function add() {
  var a = arguments.length > 0 && arguments[0] !== undefined
    ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1] : 2;
  return a + b;
};
```

### Integrating Babel with Your Build Tools

Integrate with Webpack (discussed next) for automatic transpiling

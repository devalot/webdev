## Querying

### Querying the DOM

It all starts with the `document`

### Getting Single Elements

`.getElementById('root')`

  : Gets by ID

`.querySelector('p span')`

  : Gets *first* element by CSS selector. Depth-first pre-order traversal.

### Getting Multiple Elements

These return a `NodeList`

`.getElementsByTagName('a')`

  : All elements of that tag

`.getElementsByClassName('highlight')`

  : All elements with that class

`.querySelectorAll('p span')`

  : All elements match by CSS selector

### The `NodeList`

`Array`-like object that isn't actually an `Array`.

Common methods like `.map` don't exist.

```javascript
const alerts = document.getElementsByClassName('alert')
console.log(alerts.length) // 4
alerts.map(() => {}) // Error: map undefined
```

### The `NodeList`

Convert to an `Array` with `Array.from()` or `[...nodeList]`

```javascript
const alerts = document.getElementsByClassName('alert')

const values1 = Array.form(alerts).map(/* */) // OK
const values2 = [...alerts].map(/* */) // OK
```

### Refining the Search

These selectors can be done on *any* node.

```javascript
const app = document.getElementById('app')
const form = app.getElementsByTagName('form')
const checkboxes = form.getElementsByClassName('checkbox')
```

## Closures

### Closures: Basics

* One of most powerful concepts in JavaScript
* Concept shared by most FP languages
* Every time a function gets created, a closure is born

### Closures: Definition

A function bundled (**enclosed**) 

with surrounding state (**lexical environment**)

```javascript
const init = () => {
  const name = 'Andrew' // `name` is enclosed
  const sayName = () => { console.log(name) }
  sayName()
}
```

### Closures: Definition

Closures allow functions to refer to

surrounding state even after function has returned.

```javascript
const init = () => {
  const name = 'Andrew'
  return () => { 
    console.log(name) 
  }
}

const sayMyName = init()
sayMyName() // 'Andrew'
```

### Demonstrating Closures: An Example

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="simple"}
~~~

(Open `src/examples/js/closure.html` and play in the debugger.)

### Creating Private Variables

Using closures to create truly private variables in JavaScript:

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="private"}
~~~

(Open `src/examples/js/closure.html` and play in the debugger.)


### Creating Private Variables

Using closures to create truly private variables in JavaScript:

```javascript
const createContainer = () => {
  let privateVar = 42

  return {
    getPrivateVar: () => privateVar,
    setPrivateVar: (n) => { privateVar = n },
  }
}

const x = createContainer()
x.privateVar // undefined
x.getPrivateVar() // 42
```

### Exercise

  #. Open `src/www/js/functional/closure-private.test.js`
  
  #. Follow directions in the `it` statements
  
  #. All tests should keep passing 

```shell
$ cd src
$ yarn jest closure-private.test.js --watch
```

### Creating Specialized Behavior

Perhaps most powerful aspect of closures:

Specializing behavior of a general function.

```javascript
const prop = (key) => (obj) => obj[key]
```

### Creating Specialized Behavior

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="specialization"}
~~~

### Creating Specialized Behavior

What about getting `prop` off a list of objects?

Something like...

```javascript
const getNames = pluck('name')

getNames(users) // ['Andrew', 'Billy', ...]
```

### Creating Specialized Behavior

Starting point:

```javascript
const getNames = (items) => {
  const vals = []
  for (let i = 0; i < items.length; i++) {
    vals.push(items[i].name)
  }
  return vals
}
```


### Creating Specialized Behavior

End point:

```javascript
const pluck = (key) => (
  (xs) => (
    xs.map(prop(key))
  )
)
```

### Exercise

  #. Open `src/www/js/functional/closure-specialize.test.js`
  
  #. Follow directions in the `it` statements
  
  #. All tests should keep passing 

```shell
$ cd src
$ yarn jest closure-specialize.test.js --watch
```

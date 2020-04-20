## `this`

### What's `this` anyway

`this` is (generally) one of two things:

* the global object (`window` for browsers)
* a function execution's context

### Global Object

```javascript
// In a browser, outside any function
console.log(this === window) // true

a = 37
console.log(window.a) // 37

this.b = 'Hello'
console.log(window.b)  // 'Hello'
console.log(b)         // 'Hello'
```

### Execution context

What comes to the left of a function's invocation?

* `obj.foo()`   <-- `obj` is the context
* `foo()`   <-- nothing, so it's the global object

```javascript
const obj = {
  foo() { return this }
}
obj.foo() === obj  // true

const bar = function() { return this }
bar() === window // true
```

### `this` is not loyal

`this` inside a function is not loyal to where it was written.

```javascript
const obj = {
  foo() { return this }
}
const myFoo = obj.foo

obj.foo() === obj // ?
myFoo() === obj // ?
```

### `this` is not loyal

`this` inside a function is not loyal to where it was written.

```javascript
const obj = {
  foo() { return this }
}
const myFoo = obj.foo

obj.foo() === obj // true
myFoo() === obj // false
```

When you refer to a function without `()`, the context is given up.

### `this` is not loyal

That means the functionality can be shared among different objects.

```javascript
const getName = function() {
  return this.name
}

const person = { name: 'Andrew', getName }
person.getName() // 'Andrew'

const pet = { name: 'Fido', givenName: getName }
person.givenName() // 'Fido'
```

### Forcing `this` to be loyal

You can `bind` the context for a function:

```javascript
const obj = {
  foo() { return this }
}
const myFoo = obj.foo.bind(obj)

obj.foo() === obj // true
myFoo() === obj // true
```

### A Function Changes The Context

```javascript
const person = {
  name: 'Andrew',
  delayedSayName() {
    setTimeout(
      function() { // new context!
        console.log(this.name)
      }, 
      1000
    )
  }
}

person.delayedSayName() // ... nothing
```

### Arrow Functions Preserve Lexical Context

Arrow functions `() => {}` preserve prior context

```javascript
const person = {
  name: 'Andrew',
  delayedSayName() {
    setTimeout(
      () => { // not new context!
        console.log(this.name)
      },
      1000,
    )
  },
}

person.delayedSayName() // ... Andrew
```

### Arrow Functions Preserve Lexical Context

That means they don't jive nicely on objects.

```javascript
const getName = () => this.name

const person = {
  name: 'Andrew',
  getName: getName,
}

person.getName() // ?
```

### Arrow Functions Preserve Lexical Context

That means they don't jive nicely on objects.

```javascript
const getName = () => this.name

const person = {
  name: 'Andrew',
  getName: getName,
}

person.getName() // undefined >:-(
```

### Arrow Functions Preserve Lexical Context

This also doesn't work:

```javascript
const person = {
  name: 'Andrew',
  getName: () => this.name,
}

person.getName() // undefined >:-(
```

### Object Methods

Stick with object function shorthand when using `this`:

```javascript
const person = {
  name: 'Andrew',
  getName() { return this.name },
}
```

### Instance Fields to the Rescue

```js
class Person {
  constructor(name) {
    this.name = name
  }
  getName = () => this.name
}

const person = new Person('Andrew')
console.log(person.getName())
```

Enabled via `@babel/plugin-proposal-class-properties`

### Object Methods

Handy for frameworks like React:

```javascript
class Person extends React.Component {
  getName() { alert(this.props.name) }
  render() {
    return (
      <button onClick={this.getName}>
        Say Name
      </button>
    )
  }
}
```

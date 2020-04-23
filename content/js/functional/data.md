## Higher-Order Functions

### Functions as Data

Functions are values and can be passed around.

```javascript
const add = (a, b) => a + b
const otherAdd = add
otherAdd(1, 2) // 3
```

### Functions as Data

Functions can be passed **into other functions**

```javascript
const repeatThreeTimes = (action) => {
  action()
  action()
  action()
}

const sayHello = () => { console.log('Hello') }

repeatThreeTimes(sayHello)

//  'Hello'  'Hello'  'Hello'
```

### Higher-Order Functions

`repeatThreeTimes` is an example of a **higher-order function**. 

Functions that take a function as an argument are called **higher-order functions**.

### Themes

Common themes of higher-order functions:

  #. Use the callback in a predefined way
  
  #. Inject data

### Higher-Order Functions: Behavior

Another example of using a callback in a predefined way:

`when`: if the `predicate` is true, run the callback.

```javascript
const when = (pred, cb) => (
  pred ? cb() : null
)

const user = {/* ... */}
const registration = when(
  isNotRegistered(user), 
  () => registerUser(user),
)
```

### Higher-Order Functions: Inject Data

```javascript
const withUser = (id, cb) => (
  cb(getUser(id))
)

withUser(42, (user) => {
  // do something with `user`...
})
```

### Higher-Order Functions

\begin{figure}
    Can anyone name higher-order functions they've encountered?
\end{figure}

### Functions Return Other Functions

Functions can even return other functions.

```javascript
const always = (value) => {
  return () => value
}

const getMagicNumber = always(42)

getMagicNumber() // 42
```

### Functions Return Other Functions

Functions that return functions are also **higher-order functions**

(This creates a *closure* which we'll discuss later.)

### Higher-Order Functions

Log the arguments to a function:

```javascript
const logArgs = (f) => (
  (...args) => {
    console.log('calling with', args)
    const result = f(...args)
    console.log('returned', result)
    return result
  }
)

const add = (a, b) => a + b
const loggedAdd = logArgs(add)
loggedAdd(3, 5)
```

### Eliminating Unnecessary Anonymous Functions

Some anonymous functions are redundant.

Rather than wrapping, pass the function directly.

```javascript
const repeatThreeTimes = (action) => { /* ... */ }
const sayHello = () => { console.log('hello') }

repeatThreeTimes(() => { sayHello() }) // is the same as...
repeatThreeTimes(sayHello)
```

### Eliminating Unnecessary Anonymous Functions

Same goes for ones that receive arguments.

```javascript
const invokeWith42 = (fn) => fn(42)
const add1ToNum = num => 1 + num

invokeWith42((num) => add1ToNum(num)) // is the same as...
invokeWith42(add1ToNum)
```

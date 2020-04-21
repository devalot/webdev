## Functions As Data

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

### Functions as Data

`repeatThreeTimes` is an example of a **higher-order function**. 

Functions that take a function as an argument and use it in

a prescribed way are called **higher-order functions**.

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

getMagicNumber() // ?
```

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

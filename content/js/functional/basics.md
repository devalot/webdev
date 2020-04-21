Defining and Invoking Functions
-------------------------------

### Defining a Function

Function statement

```javascript
    function foo() {}
```

Function expression

```javascript
    const foo = function() {}
```

Named function expression

```javascript
    const foo = function myFooFn() {}
```

Arrow function (MOST COMMON)

```javascript
    const foo = () => {}
```

### Function Invocation

Parentheses are mandatory in JavaScript for function invocation. 

Otherwise, you're looking at the function.

```javascript
const foo = (a, b, c) => {
  console.log(a, b, c)
}

foo(1, 2, 3) // 1, 2, 3
foo // [Function: foo]
```

### Function Invocation

Extra arguments won't be bound to a name

Missing arguments will be `undefined`

```javascript
const foo = (a, b, c) => {
  console.log(a, b, c)
}

foo(1, 2, 3, 4, 5) // 1, 2, 3
foo(1) // 1, undefined, undefined
```

### Function Arity

A function's *arity* is the number of arguments it expects.  

Accessed via `length` property.

```javascript
const foo = (x, y, z) => { /* ... */ }
foo.length // ?
```

### Function Arity

A function's *arity* is the number of arguments it expects.  

Accessed via `length` property.

```javascript
const foo = (x, y, z) => { /* ... */ }
foo.length // 3
```

### Function Arity

Optional arguments aren't considered "expected"

```javascript
const foo = (x, y, z = 42) => { /* ... */ }
foo.length // ?
```

### Function Arity

Optional arguments aren't considered "expected"

```javascript
const foo = (x, y, z = 42) => { /* ... */ }
foo.length // 2
```

### Function Arity

Rest arguments also aren't considered "expected"

```javascript
const foo = (x, y, ...remaining) => { /* ... */ }
foo.length // ?
```

### Function Arity

Rest arguments also aren't considered "expected"

```javascript
const foo = (x, y, ...remaining) => { /* ... */ }
foo.length // 2
```


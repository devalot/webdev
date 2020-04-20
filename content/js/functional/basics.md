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

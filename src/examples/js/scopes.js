// <<: function-scopes
function foo() {
  const a = 1
  console.log(a)
}

function bar() {
  console.log(a) // ?
}
// :>>

// <<: function-scopes-answer
function foo() {
  const a = 1
  console.log(a)
}

function bar() {
  console.log(a) // ReferenceError: a not defined
}
// :>>

// <<: nested-example
function outerFunction() {
  const outer = 'Outer variable'

  function innerFunction() {
    const inner = 'Inner variable'
    console.log(outer) // ?
  }

  console.log(inner) // ?
}

console.log(outer) // ?
// :>>

// <<: nested-answer
function outerFunction() {
  const outer = 'Outer variable'

  function innerFunction() {
    const inner = 'Inner variable'
    console.log(outer) // Outer variable
  }

  console.log(inner) // ReferenceError
}

console.log(outer) // ReferenceError
// :>>

// <<: shadowing
function foo() {
  const a = 10
  function inner() {
    const a = 2
    console.log(a) // ?
  }
  console.log(a) // ?
}
// :>>

// <<: shadowing-answer
function foo() {
  const a = 10
  function inner() {
    const a = 2
    console.log(a) // 2
  }
  console.log(a) // 10
}
// :>>

// <<: scope-challenge
d = 15

function foo(b) {
  e = 42
  function myFn(f) {
    const c = 2
    return f + c + b
  }
  console.log(c) // ?
  return myFn
}

console.log(d) // ?
console.log(e) // ?
console.log(foo(2)(4)) // ?
// :>>

// <<: scope-challenge-answer
d = 15

function foo(b) {
  e = 42
  function myFn(f) {
    const c = 2
    return f + c + b
  }
  console.log(c) // ReferenceError
  return myFn
}

console.log(d) // 15
console.log(e) // 42
console.log(foo(2)(4)) // 8
// :>>

// <<: scope-challenge-2
d = 15
function foo() {
  const c = 10
  return d === c ? 'error' : 'yay'
}

console.log(foo()) // ?
d = 10
console.log(foo()) // ?
// :>>

// <<: scope-challenge-2-answer
d = 15
function foo() {
  const c = 10
  return d === c ? 'error' : 'yay'
}

console.log(foo()) // 'yay'
d = 10
console.log(foo()) // 'error'
// :>>

// <<: block-scope
function blockScope() {
  if (Math.random() > 0.5) {
    const a = 1
    var b = 2
  }
  console.log(a) // ?
  console.log(b) // ?
}
// :>>

// <<: block-scope-answer
function blockScope() {
  if (Math.random() > 0.5) {
    const a = 1
    var b = 2
  }
  console.log(a) // ReferenceError
  console.log(b) // It depends...
}
// :>>

// <<: block-scope-2
function blockScope() {
  {
    const a = 1
  }
  console.log(a) // ?
}
// :>>

// <<: block-scope-2-answer
function blockScope() {
  {
    const a = 1
  }
  console.log(a) // ReferenceError
}
// :>>

// <<: top-down
function first() {
  second()
}

function second() {
  console.log('Hello')
}

second() // ?
// :>>

// <<: top-down-answer
function first() {
  second()
}

function second() {
  console.log('Hello')
}

second() // 'Hello'
// :>>

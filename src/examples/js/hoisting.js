// <<: exercise-1
function foo() {
  console.log(x) // ?
  var x = 42
}
// :>>

// <<: answer-1
function foo() {
  var x
  console.log(x)
  x = 42
}
// :>>

// <<: function-hoisting
function greet() {
  sayHello()

  function sayHello() {
    console.log('Hello')
  }
}

greet() // ?
// :>>

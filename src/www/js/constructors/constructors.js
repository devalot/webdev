// jshint esversion: 6
/*
 * Exercise: Constructor Functions
 *
 * 1. Create a constructor function named `Calculator'.  It should
 *    accept a single argument, an initial value for the calculator.
 *
 *    If the caller doesn't provide an initial value, set it to zero.
 *
 * 2. A calculator should support a stack (i.e. an array of numbers)
 *    that starts out empty.
 *
 * 3. Create a prototype function called `push' that pushes a number
 *    onto the calculator's stack.
 *
 * 4. Create the following prototype functions:
 *
 *   add: Sums the stack then adds the sum to the calculator's value
 *   mul: Same as `add', except use multiplication
 *   get: Returns the value of the current calculator value
 *
 * 5. The `add' and `mul' functions should clear the stack.
 *
 * Example usage:
 *
 *   var c = new Calculator(5);
 *   c.push(5);   // Add 5 to the stack.
 *   c.push(10);  // Add 10 to the stack.
 *   c.add();     // Sum stack and add to 5,
 *                // Stack is now empty.
 *   c.get();     // returns 20
 */
function Calculator(init) {
  this.value = init || 0;
  this.stack = [];
}

Calculator.prototype = {
  op: function(f) {
    this.value = this.stack.reduce(f, this.value);
    this.stack = [];
  },
  get: function() {
    return this.value;
  },
  push: function(num) {
    this.stack.push(num);
  },
  add: function() {
    this.op((a, n) => a + n);
  },
  mul: function() {
    this.op((a, n) => a * n);
  }
};

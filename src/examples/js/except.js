/******************************************************************************/
let someBadCondition = false;

// <<: throw
if (someBadCondition) {
  throw "Well, this is unexpected!";
}
// :>>

/******************************************************************************/
// <<: catch1
let beSafe = function() {
  try {
    // Some code that might fail.
  }
  catch (e) {
    // Errors show up here.  All of them.
  }
};
// :>>


/******************************************************************************/
// <<: catch2
let beSafe2 = function() {
  try { /* Code that might fail. */ }
  catch (e) {
    if (e instanceof TypeError) {

      // If you're here then the error
      // is a TypeError.

    } else {
      throw e; // Re-throw the exception.
    }
  }
};
// :>>

/******************************************************************************/
// <<: custom1
function ShoppingCartError(message) {
  this.message = message;
  this.name    = "ShoppingCartError";
}

// Steal from the `Error' object.
ShoppingCartError.prototype = Error.prototype;

// To throw the exception:
throw new ShoppingCartError("WTF!");
// :>>

/******************************************************************************/
// <<: custom2
let error = new Error("WTF!");
error.name = "ShoppingCartError";
error.extraInfo = 42;
throw error;
// :>>

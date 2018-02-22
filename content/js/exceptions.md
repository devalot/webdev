# Exception Handling

## Errors in JavaScript

Handling errors in JavaScript is done through exceptions.  Programmers
familiar with Java or C++ will feel (mostly) comfortable with
JavaScript's exception system.

### Exception Basics

  * Errors in JavaScript propagate as exceptions

  * Dealing with errors therefore requires an exception handler

  * Keywords for exception handling:
      - `try`: Run code that might throw exceptions
      - `catch`: Capture a propagating exception
      - `throw`: Start exception processing
      - `finally`: Resource clean-up handler

### Example: Throwing an Exception

When a major error occurs, use the `throw` keyword:

~~~ {.javascript insert="../../src/examples/js/except.js" token="throw"}
~~~

### Exception Objects

While you can throw exceptions with primitive types such as numbers
and strings, it's more idiomatic to throw exception objects.

### Built-in Exception Objects

  * `Error`: Generic run-time exception

  * `EvalError`: Errors coming from the `eval` function

  * `RangeError`: Number outside expected range

  * `ReferenceError`: Variable used without being declared

  * `SyntaxError`: Error while parsing code

  * `TypeError`: Variable not the expected type

  * `URIError`: Errors from `encodeURI` and `decodeURI`

### Creating Your Own Exception Object

This looks more traditional, but it's missing valuable information.

~~~ {.javascript insert="../../src/examples/js/except.js" token="custom1"}
~~~

### Custom Exceptions: The Better Way

If you start with an `Error` object, you retain a stack trace and
error source information (e.g., file name and line number).

~~~ {.javascript insert="../../src/examples/js/except.js" token="custom2"}
~~~

## Catching Exceptions

If you can handle an error condition thrown from code inside a `try`
block then you can use a `catch` block to do so.  In JavaScript you
can only use a *single* `catch` statement.  That means you have to
catch an exception and then inspect it to see if it's the one you can
handle.

### Example: Catching Errors

~~~ {.javascript insert="../../src/examples/js/except.js" token="catch1"}
~~~

### Example: Catching Exceptions by Type

Most of the time you only want to deal with specific exceptions:

~~~ {.javascript insert="../../src/examples/js/except.js" token="catch2"}
~~~

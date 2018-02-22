### Exception Handling

  * Throwing Exceptions

    Throwing a string wraps it in a new `Error` object.

    ~~~ {.javascript insert="../../src/examples/js/except.js" token="throw"}
    ~~~

  * Catching Exceptions

    Since JavaScript doesn't have any types you can't catch specific
    types of exceptions.  You have to catch all exceptions and
    re-throw the ones you can't handle, or just swallow them by doing
    nothing.

    ~~~ {.javascript insert="../../src/examples/js/except.js" token="catch2"}
    ~~~

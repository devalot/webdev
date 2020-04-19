### Observable Basics ###

Observables are:

  * Sort of like promises, but for multiple values over time

  * A functional way of dealing with events (push-based values)

  * Another way to embrace functional programming in JavaScript

  * Blends functional programming and the Observer Pattern

### Example: Subscribing to Events ###

When subscribing to an Observable you provide a function that will get
called each time a value is delivered:

~~~ {.javascript insert="../../../../../src/www/js/apis/rxjs/example.js" token="subscribe"}
~~~

(See: `src/www/js/apis/rxjs/example.js`)

### Example: Observables from Events ###

There are many ways to create an Observable.  The `fromEvent` function
creates an Observable that delivers event objects:

~~~ {.javascript insert="../../../../../src/www/js/apis/rxjs/example.js" token="observable"}
~~~

(See: `src/www/js/apis/rxjs/example.js`)

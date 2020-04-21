---
title: "Targeted Topics"

author:
  - name: "Peter J. Jones"
    email: "pjones@devalot.com"
    url: "http://devalot.com"
    twitter: "devalot"

copyright: >
  Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License:
  <https://creativecommons.org/licenses/by-nc-sa/4.0/>

  To license this work for use in a commercial setting contact Peter J. Jones.
---

# Introduction to This Course {.unnumbered}

The source code for this course can be found at the following URL:

<https://github.com/devalot/webdev>

<div class="notes">

<<(../content/js/requirements.md)

</div>

Track 1: Modern Programming Techniques
========================================

The way we solve problems in JavaScript has changed a lot in recent
years.  We now have classes instead of just objects and ways to tame
asynchronous callbacks using promises and the `await` keyword.  And on
top of this JavaScript has many ways to embrace different programming
paradigms from object-oriented to functional.

This track will help you change the way you approach and use
JavaScript.

JavaScript Classes and the Prototype
------------------------------------

Starting in ES2015, JavaScript includes the ability to define classes.
However, this new syntax for creating classes is just a thin layer
over the existing prototype system.  To get the most out of
JavaScript's object-oriented features you need to understand classes
*and* prototypes.

In this section we will review and explore:

  * Objects, properties, and the `this` keyword

  * Constructor functions and the `new` operator

  * Prototype and generic functions

  * Defining classes with the `class` keyword

  * The `get` and `set` property descriptors

  * JavaScript `getters` and `setters`


<<(../content/js/oop/context.md#example-this)
<<(../content/js/oop/prototype.md#property-get)
<<(../content/js/oop/prototype.md#object-create)
<<(../content/js/oop/prototype.md#property-set)
<<(../content/js/oop/prototype.md#proto)
<<(../content/js/oop/prototype.md#proto-array)
<<(../content/js/oop/prototype.md#ctor-proto)
<<(../content/js/oop/ctor-and-classes.md#ctor-proto)
<<(../content/js/oop/ctor-and-classes.md#es2015-classes)
<<(../content/js/labs.md#constructors)
<<(../content/js/oop/ctor-and-classes.md#prototype-inheritance)
<<(../content/js/oop/ctor-and-classes.md#es2015-inheritance)
<<(../content/js/oop/ctor-and-classes.md#generic-functions)
<<(../content/js/oop/ctor-and-classes.md#es2015-static)
<<(../content/js/oop/ctor-and-classes.md#get-set)
<<(../content/js/oop/ctor-and-classes.md#es2015-get-set)
<<(../content/js/oop/ctor-and-classes.md#this-gotcha)
<<(../content/js/oop/ctor-and-classes.md#this-bind)
<<(../content/js/oop/ctor-and-classes.md#this-alias)
<<(../content/js/oop/ctor-and-classes.md#this-arrow)
<<(../content/js/oop/mutable.md#mutable-passing)
<<(../content/js/oop/mutable.md#mutable-freeze)
<<(../content/js/labs.md#builder)

Functional Programming with JavaScript
--------------------------------------

While functional programming seems to be a modern trend in software
development, JavaScript has supported various functional techniques
for a long time.  Recent changes to JavaScript have also included
additional support for functional programming.

When focusing on functions as first-class citizens in a programming
language many interesting topics come up.  We'll dig into the
following:

  * Functions as data

  * Nesting functions and creating closures

  * Using functions to create new scopes (IIFE)

  * Higher-order functions and functional patterns

  * Arrow functions

  * Manipulating and wrapping functions

  * Safe programming with pure functions

<<(../content/js/functional/basics.md)
<<(../content/js/functional/data.md
<<(../content/js/functional/closures.md)
<<(../content/js/functional/array.md)
<<(../content/js/functional/this.md#call)
<<(../content/js/functional/this.md#apply)
<<(../content/js/functional/this.md#bind)
<<(../content/js/functional/pure.md)

Asynchronous Programming
------------------------

JavaScript is executed in a single-threaded interpreter.  In order to
maintain the appearance of responsiveness the interpreter relies on
asynchronous programming.  This is just a fancy way of saying that
you'll be using a lot of callbacks.

During recent revisions to the language asynchronous programming has
become easier thanks to promises and `async` functions.  To take full
advantage of these features we'll learn about:

  * Asynchronous callbacks with dependencies

  * How to properly structure asynchronous code

  * What are promises and how do they help?

  * The new `async` and `await` keywords

  * Concurrent vs. serial async code

  * Writing modern asynchronous code

<<(../content/js/async/runtime/basics.md)
<<(../content/js/async/promises/basics.md)
<<(../content/js/apis/fetch/basics.md)
<<(../content/js/apis/fetch/support.md)
<<(../content/js/apis/fetch/lab.md)
<<(../content/js/async/await/basics.md)

Track 2: Modern APIs and Tools
================================

Everything about JavaScript has been marching forward at an increasing
pace since the release of ECMAScript 6th Edition in 2015.  The
language has brand new syntax, browsers expose incredibly powerful new
features, and developers can finally take advantage of first-rate
tools.

Together we'll walk through all of these recent developments in the
JavaScript ecosystem and learn how to make the most of them.


Modern JavaScript: ES2015 - ES2018
----------------------------------

Formerly known as ES6, the revision of JavaScript that brought the
largest amount of changes in nearly a decade is now colloquially known
as ES2015.  Since 2015 JavaScript has been updated each year with the
final set of changes being released in the Summer.

We'll look at how the language has evolved since 2015 with a focus on
the following features:

  * Lexical scoping and the end of hoisting

  * Function arguments: defaults, collecting, and splitting

  * Modules: exporting and importing

  * Generators and iterators

  * New data types (e.g., Map and Set)

  * Review classes, arrow functions, and `async` functions

<<(../content/js/es-features/es2015.md)
<<(../content/js/es-features/es2016.md)
<<(../content/js/es-features/es2017.md)
<<(../content/js/es-features/es2018.md)
<<(../content/js/es-features/experimental/decorators/basics.md)
<<(../content/js/es-features/experimental/observable/basics.md)

Important Browser APIs
----------------------

JavaScript is a language that was designed to run in a web browser and
the browser itself has many features independent of the language it
hosts.  For better or worse many features that we rely upon are backed
by independent standards and specifications.

There are a lot of different features a browser can choose to expose
to a JavaScript application.  We'll take a look at some of the newer
and more powerful features of web browsers:

  * Web Storage (super cookies)

  * Web Workers and Service Workers

  * Bidirectional communication over WebSockets

  * Simple asynchronous HTTP requests using `fetch`

<<(../content/js/apis/fetch/basics.md)
<<(../content/js/apis/fetch/support.md)
<<(../content/js/apis/fetch/lab.md)
<<(../content/js/apis/components/elements.md)
<<(../content/js/apis/components/shadow.md)
<<(../content/js/apis/components/templates.md)
<<(../content/js/apis/components/support.md)
<<(../content/js/apis/components/labs.md#ex-wc-main)
<<(../content/js/apis/websockets/basics.md)
<<(../content/js/apis/websockets/support.md)
<<(../content/js/apis/websockets/labs.md)
<<(../content/js/apis/webstorage/basics.md)
<<(../content/js/apis/webstorage/support.md)
<<(../content/js/apis/webstorage/labs.md#ex-storage-chat)
<<(../content/js/apis/webworkers/basics.md)
<<(../content/js/apis/webworkers/support.md)
<<(../content/js/apis/serviceworkers/basics.md)
<<(../content/js/apis/serviceworkers/support.md)

JavaScript Development Tools
----------------------------

Not only has the language and browser changed over the last few years
but the tools that we use as JavaScript developers have also seen
major improvements.  It's been difficult over the last few years to
keep up with all the changes in the JavaScript ecosystem but now we
have a few clear winners that every developer should be using.  And
guess what, they're all written in JavaScript!

Ready to start using the best tools for writing JavaScript?  You're in
the right place because we are going to look at some of the most
important tools you need to know:

  * Catching problems early with ESLint

  * Extreme browser compatibility with Babel

  * Project compilation with Webpack

  * Testing with Jasmine

<<(../content/js/tools/packages/index.md)
<<(../content/js/tools/lint/basics.md)
<<(../content/js/tools/babel/basics.md)
<<(../content/js/tools/webpack/basics.md)
<<(../content/js/jest/index.md)
<<(../content/js/alternatives/typescript/basics.md)

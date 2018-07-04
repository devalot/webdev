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

<<(../content/js/requirements.md)

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
<<(../content/js/adv-oop.md#property-get)
<<(../content/js/adv-oop.md#object-create)
<<(../content/js/adv-oop.md#property-set)
<<(../content/js/adv-oop.md#proto)
<<(../content/js/adv-oop.md#proto-array)
<<(../content/js/adv-oop.md#ctor-proto)
<<(../content/js/adv-oop.md#es2015-classes)
<<(../content/js/adv-oop.md#prototype-inheritance)
<<(../content/js/adv-oop.md#es2015-inheritance)
<<(../content/js/adv-oop.md#generic-functions)
<<(../content/js/adv-oop.md#es2015-static)
<<(../content/js/adv-oop.md#get-set)
<<(../content/js/adv-oop.md#es2015-get-set)
<<(../content/js/adv-oop.md#this-gotcha)
<<(../content/js/adv-oop.md#this-bind)
<<(../content/js/adv-oop.md#this-alias)
<<(../content/js/adv-oop.md#this-arrow)

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

<<(../content/js/basic-functions.md#func-intro)
<<(../content/js/basic-functions.md#func-define)
<<(../content/js/basic-functions.md#func-statement)
<<(../content/js/basic-functions.md#func-expression)
<<(../content/js/basic-functions.md#func-arrow)
<<(../content/js/basic-functions.md#func-parens)
<<(../content/js/basic-functions.md#wrong-args)
<<(../content/js/basic-functions.md#func-data)
<<(../content/js/basic-functions.md#funcs-as-args)
<<(../content/js/basic-functions.md#funcs-as-returns)
<<(../content/js/closures.md#closure-example)
<<(../content/js/closures.md#private)
<<(../content/js/closures.md#closures-loops)
<<(../content/js/closures.md#closure-exercise)

<!-- FIXME: New functions for thier scope: IIFE -->

<<(../content/js/functional/array.md#foreach)
<<(../content/js/functional/array.md#every-some)

<!-- FIXME: better filter example -->
<!-- FIXME: better map example -->

<<(../content/js/adv-functions.md#arity)
<<(../content/js/adv-functions.md#call)
<<(../content/js/adv-functions.md#apply)
<<(../content/js/adv-functions.md#bind)
<<(../content/js/adv-functions.md#partial-intro)
<<(../content/js/adv-functions.md#partial-haskell)
<<(../content/js/adv-functions.md#partial-bind)
<<(../content/js/adv-functions.md#partial-exercise)

<!-- FIXME: pure functions -->

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

<!-- FIXME: Why async? Intro to the runtime -->

<<(../content/js/adv-async.md#async-callbacks)
<<(../content/js/adv-async.md#promise-callbacks)
<<(../content/js/adv-async.md#promise-details)
<<(../content/js/adv-async.md#promise-composition)
<<(../content/js/adv-async.md#promise-owner-diagram)
<<(../content/js/adv-async.md#promise-owner-example)
<<(../content/js/adv-async.md#promise-user-diagram)
<<(../content/js/adv-async.md#promise-composition-example)

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

<<(../content/js/changes/es2015-features.md)
<<(../content/js/changes/es2016-features.md)
<<(../content/js/changes/es2017-features.md)
<<(../content/js/changes/es2018-features.md)

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

<<(../content/js/apis/webstorage.md)
<<(../content/js/apis/webworkers.md)

<!-- FIXME: add a secont about service workers -->

<<(../content/js/apis/websockets.md)
<<(../content/js/apis/fetch.md)

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

<!-- FIXME: ESLint how-to -->
<!-- FIXME: Slides on bable -->

<<(../content/js/tools/webpack.md)
<<(../content/js/testing.md)

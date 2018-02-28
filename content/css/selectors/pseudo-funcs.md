## Pseudo Classes that Take Values

Some pseudo classes can act like functions that take values.  The
selector changes its behavior based on the value given.

~~~ {.css}
:name(value) { /* ... */ }
~~~

<div class="notes">

Example selectors that take values:

  * `nth-child`

  * `nth-last-child`

  * `nth-of-type`

  * `nth-last-of-type`

  * `not`

</div>

### Selecting Any Grouping of Children

<!-- Introduce the nth-child selector -->

~~~ {.css}
:nth-child(value) { /* ... */ }
~~~

Example uses of `nth-child`:

  * Select even or odd children

  * Select every third child

  * Select the first 5 children

  * Select the last 8 children

### Even or Odd Children

~~~ {.css}
li:nth-child(even) { /* ... */ }
li:nth-child(odd)  { /* ... */ }
~~~

(The first child is odd.)

### The Nth Child

Select the third (and only the third) child:

~~~ {.css}
li:nth-child(3) { /* ... */ }
~~~

### Every Nth Child

Select the third child and every third child after that:

~~~ {.css}
li:nth-child(3n) { /* ... */ }
~~~

### Every Nth Child Starting at X

Select every third child, starting at the first child:

~~~ {.css}
li:nth-child(3n+1) { /* ... */ }
~~~

### Selecting All Previous or Following Children

Select all children after (and including) the second child:

~~~ {.css}
li:nth-child(n+2) { /* ... */ }
~~~

Select all child before (and including) the second child:

~~~ {.css}
li:nth-child(-n+2) { /* ... */ }
~~~

### Nth Child Variations

`:nth-last-child`:
  ~ Starts from the bottom of the child list.

`:nth-of-type`:
  ~ Filters the child list by a type selector.

`:nth-last-of-type`:
  ~ `:nth-of-type` + `:nth-last-child`

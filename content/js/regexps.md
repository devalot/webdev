# Regular Expressions

## Introduction to Regular Expressions

### Regular Expressions

  * Patterns used to match character combinations in strings

  * Very tough to understand but extremely powerful

  * Useful for data validation

  * JavaScript supports literals for the `RegExp` object:

    ~~~ {.javascript}
    var re = /^\d+$/;
    re.test("1234"); // true
    ~~~

### Expression Language Primer

  Token   Meaning
  ------- ----------------------------
  `.`     Match any single character
  `\w`    Match a word character
  `\d`    Match a digit
  `\s`    Match a space character
  `\b`    Word boundary

  Repeater   Meaning
  ---------- -------------------------------------
  `?`        Match zero or one preceding token
  `*`        Match zero or more preceding tokens
  `+`        Match one or more preceding tokens

## Using Regular Expressions

### `String` Methods That Take Regular Expressions

`str.match(re);`

  : If the expression matches, returns an array describing what
    matched.

`str.replace(re);`

  : Replace parts of a string matched by an expression.

`str.search(re);`

  : Tests to see if the expression matches.  Faster than `match`
    because it stops after the first match and returns `1`.

`str.split(re);`

  : Split a string at locations matched by the expression and return
    an array.

### Exercise: String Manipulation

  #. Open the following file:

        www/string/string.js

  #. Complete the exercise.

  #. Run the tests by opening <http://localhost:3000/string/>

Hint: Use <http://devdocs.io/> or <https://developer.mozilla.org/> for
documentation.

<div class="notes">

[Solution](#cc82c483-5044-43d9-803e-cb4f5dd5b53e)

</div>

## Additional Resources on Regular Expressions

  * [Interactive Tool](http://regexpal.com/)
  * [Cheat Sheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)

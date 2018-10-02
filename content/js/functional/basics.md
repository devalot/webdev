Defining and Invoking Functions
-------------------------------

### Defining a Function ### {#func-define}

There are several ways of defining functions:

  - Function statements (named functions)
  - Function expression (anonymous functions)
  - Arrow functions (new in ES2015)

### Function Definition (Statement) ### {#func-statement}

~~~ {.javascript}
function add(a, b) {
  return a + b;
}

var result = add(1, 2); // 3
~~~

  - This syntax is know as a *function definition statement*.  It is
    only allowed where statements are allowed.

  - In modern JavaScript you will mostly use the expression form of
    function definitions or the arrow function syntax.

### Function Definition (Expression) ### {#func-expression}

~~~ {.javascript}
var add = function(a, b) {
  return a + b;
};

var result = add(1, 2); // 3
~~~

  - Function is callable through a variable
  - Name after `function` is optional
  - We'll see it used later

### Function Definition (Arrow Functions) ### {#func-arrow}

Short form (single expression, implicit `return`):

~~~ {.javascript}
var add = (a, b) => a + b;
add(1, 2);
~~~

Long form (multiple expressions, explicit `return`):

~~~ {.javascript}
var add = (a, b) => {
  return a + b;
};

add(1, 2);
~~~

### Function Invocation ### {#func-parens}

  - Parentheses are mandatory in JavaScript for function invocation

  - Any number of arguments can be passed, regardless of the number
    defined

  - Extra arguments won't be bound to a name

  - Missing arguments will be `undefined`

### Function Invocation (Example) ### {#wrong-args}

~~~ {.javascript}
var add = function(a, b) {
  return a + b;
};

add(1)       // a is 1, b is undefined
add(1, 2)    // a is 1, b is 2
add(1, 2, 3) // No name for 3.
~~~

(Note: ES2015 has default parameters.)

<<(../changes/es2015-features.md#args-spread)

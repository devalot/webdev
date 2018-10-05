# Exercises and Solutions

## Scope Sharing Exercise {#a7d3728d-3aa9-4519-92f9-f2cfaee9401e}

One possible solution:

~~~ {.javascript}
  function outer(value) {
    let shared = value;

    let inner1 = function() {
      console.log("from inner1: " + shared);
    };

    let inner2 = function() {
      console.log("from inner2: " + shared);
    };

    return [inner1, inner2];
  }

  funcs = outer(15);
  funcs[0]();
  funcs[1]();
~~~

And here's another version, this time using objects:

~~~ {.javascript}
  let outer = function(value) {
    return {
      first: function() {
        console.log("First:", value);
      },
      second: function() {
        console.log("Second:", value);
      }
    };
  };

  funcs = outer(15);
  funcs.first();
  funcs.second();
~~~

## Arrays: Reverse an Array {#db823740-94c9-4c6a-86be-5d29a41813af}

1.  Reverse and array:

~~~ {.javascript}
function reverse (array) {
  let result = [];

  for (let j=0, i=array.length - 1; i >= 0; --i, ++j) {
    result[j] = array[i];
  }

  return result;
}

console.log(reverse(["A", "B", "C", "D"]).toString());

function reverse2 (array) {
  let result = [];

  for (let i=0; i<array.length; ++i) {
    result.unshift(array[i]);
  }

  return result;
}

console.log(reverse2(["A", "B", "C", "D"]).toString());
~~~

Throw an exception:

~~~ {.javascript}
  function safeReverse (toReverse) {
    let result = [];

    //  Solution 1:
    if (!Array.isArray(toReverse)) {
      throw new TypeError("safeReverse expects an array");
    }

    // Solution 2:
    if (!(toReverse instanceof Array)) {
      throw new TypeError("safeReverse expects an array");
    }

    // Now reverse the array...
  }
~~~

Inline version (bonus):

~~~ {.javascript}
  function inlineReverse (array) {
    for (let x, i=0, j=array.length - 1; i < j; ++i, --j) {
      x = array[i];
      array[i] = array[j];
      array[j] = x;

    }

    return array;
  }

  console.log(inlineReverse(["A", "B", "C", "D"]).toString());
  console.log(inlineReverse(["A", "B", "C"]).toString());

~~~

## Strings: Replacing Words {#cc82c483-5044-43d9-803e-cb4f5dd5b53e}

~~~ {.javascript}
processString = function(input) {
  let today = (new Date()).toDateString(),
      count = 0;

  let result = input.replace(/\b\w+\b/g, function(word) {
    count += (word.match(/x/gi) || []).length;

    switch (word.toLowerCase()) {
    case "today":
      return today;

    case "pi":
      return "3.14";

    default:
      return word;
    }
  });

  return result + " " + count;
};
~~~

## Printing an Array of Objects {#a5023f958-d61b-4725-8c8f-dcc6b494899}

~~~ {.javascript}
  function gridify (list) {

    if (list.length === 0) {
      return;
    }

    // Log the header row:
    let headers = Object.keys(list[0]).sort();
    console.log(headers.map(String.capitalize).join("\t"));

    // Log each of the objects:
    list.forEach(function(e) {
      let values = headers.map(function(h) {
        return e[h];
      });

      console.log(values.join("\t"));
    });
  }

  gridify([
    {name: "Ryan", value: 913},
    {name: "Jimmy", value: 20003},
    {name: "Donna", value: 923}

  ]);

~~~

## Callbacks and Closures {#dbb58178-52c5-47ff-9078-c8ac2293c36f}

  - All of them print `3`
  - [Original Exercise](#f40ee4fc-46a4-4d83-b121-2b0f101ab9f8)

~~~ {.javascript}
  for (var i=0; i<3; i++) {
    (function(index){
      setTimeout(function(){
        console.log(index);
      }, 1000*index);
    })(i);
  }

  // Rewrite:

  for (var i=0; i<3; i++) {
    var outer = function(index) {
      var inner = function() {
        console.log(index);
      };

      setTimeout(inner, 1000*index);
    };

    outer(i);
  }
~~~

## Create an Object Literal

  - Create an object that represents yourself
  - Example properties:
    -   Name
    -   Age
    -   Height
    -   etc.

## Add a Method to Your Object

  - Create a function property on your object
  - Call the function `speak`
  - It should accept a string argument and log a message
  - Example:

    ~~~ {.javascript}
      let me = {
        name: "Peter",
        height: 67,
        speak: function(message) {
          // log: "Peter says {message}"
        }
      };

      me.speak("hello there!");
    ~~~

One Possible Solution:

~~~ {.javascript}
  let me = {
    name: "Peter",
    height: 67,
    speak: function(message) {
      console.log(this.name + " says " + message);
    }
  };
~~~

## Flags, Buckets, and Events {#e1097a29-91ed-4aae-a9bd-248408311190}

  - <http://jsfiddle.net/devalot/fgvpdLd8/>

~~~ {.javascript}
  let Bucket = function(bucket_id) {
    let bucket = document.getElementById(bucket_id);

    let move = function(element) {
      bucket.appendChild(element);
    };

    let moveOnClick = function(selector) {
      let element = document.querySelector(selector);

      if (!element) {
        console.error("No matching element: " + selector);
        return;
      }

      element.addEventListener("click", function(e) {
        move(e.target);
      });
    };

    return {
      move: move,
      moveOnClick: moveOnClick
    };
  };

  let bucket = Bucket("bucket");
  bucket.moveOnClick(".main li:nth-child(2)");
  bucket.moveOnClick("#articles .flag");
  bucket.moveOnClick(".footer div div div div");
~~~

## Tabbed UIs, JSON, and Ajax

1.  Make a tabbed user interface work:

    <http://jsfiddle.net/mrmorris/osq6fed3/>

2.  Turn JSON data into an HTML table:

    <http://jsfiddle.net/mrmorris/mnyn3y0t/>

3.  Bonus points: use Ajax to load the data

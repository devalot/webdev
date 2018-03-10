## Introduction

### Ajax Basics

  - Asynchronous JavaScript and XML

  - API for making HTTP requests

  - Handled by the `XMLHttpRequest` object

  - Introduced by Microsoft in the late 1990s

  - Why use it? Non-blocking server interaction!

  - Limited by the same-origin policy

### Ajax: Step by Step

  #. JavaScript asks for an HTTP connection
  #. Browser makes a request in the background
  #. Server responds in XML/JSON/HTML
  #. Browser parses and processes response
  #. Browser invokes JavaScript callback

## The XHR API

### Sending a Request, Basic Overview

~~~ {.javascript}
var req = new XMLHttpRequest();

// Attach event listener...

req.open("GET", "/example/foo.json");
req.send(null);
~~~

### Knowing When the Request Is Complete

~~~ {.javascript}
var req = new XMLHttpRequest();

req.addEventListener("load", function(e) {
  if (req.status == 200) {
    console.log(req.responseText);
  }
});
~~~

## Payload Formats

### Popular Data Formats for Ajax

  - HTML: Easiest to deal with
  - XML: Pure data, but verbose
  - JSON: Pure data, very popular

### Ajax with HTML

  - Easiest way to go
  - Just directly insert the response into the DOM
  - Scripts will **not** run

### Ajax with XML

More work to extract data from XML:

~~~ {.javascript insert="../../src/examples/js/xml-ajax.js" token="load"}
~~~

### What is JavaScript Object Notation (JSON)?

<div class="notes">

  - Used as a data storage and communications format

  - Very similar to object literals, with a few restrictions
    -   Property names must be in double quotes
    -   No function definitions, function calls, or variables

</div>

  - Built-in methods:
    -   `JSON.stringify(object);`
    -   `JSON.parse(string);`
  - Example:

    ~~~ {.example}
      {
        "messages": [
          {"text": "Hello", "priority": 1},
          {"text": "Bye",   "priority": 2}
        ],
        "sender": "Lazy automated system"
      }

    ~~~

### Ajax with JSON

  - Sent and received as a string
  - Needs to be serialized and de-serialized:

    ~~~ {.javascript}
    req.send(JSON.stringify(object));

    // ...

    var data = JSON.parse(req.responseText);
    ~~~

## Tips and Tricks

### Should You Use the XHR API?

  - It is best to use an abstraction for `XMLHttpRequest`

  - They usually come with better:
    -   `status` and `statusCode` handling
    -   Error handling
    -   Callback registration
    -   Variations in browser implementations
    -   Additional event handling (progress, load, error, etc.)
  - So, use a library like jQuery

## Putting It All Together

### Exercise: Making Ajax Requests

  #. Open the following files:

     - `src/www/js/artists/artists.js`

     - `src/www/js/artists/index.html`

  #. Open <http://localhost:3000/js/ajax/>

  #. Complete the exercise.

## Restrictions and Getting Around Them

### Same-origin Policy and Cross-origin Requests

  - By default, Ajax requests must be made on the same domain

  - Getting around the same-origin policy
    -   A proxy on the server
    -   JSONP: JSON with Padding
    -   Cross-origin Resource Sharing (CORS) (`>=` IE10)

Recommendation: Use CORS.

### Introducing JSONP

  - Browser doesn't enforce the same-origin policy for resources
    (images, CSS files, and JavaScript files)

  - You can emulate an Ajax call to another domain that returns JSON by
    doing the following:

    1.  Write a function that will receive the JSON as an argument

    2.  Create a `<script>` element and set the `src` attribute to a
        remote domain, include the name of the function above in the
        query string.

    3.  The remote server will return JavaScript (not JSON)

    4.  The JavaScript will simply be a function call to the function
        you defined in step 1, with the requested JSON data as its only
        argument.

### Example: JSONP

1.  Define your function:

    ~~~ {.javascript}
    function myCallback (someObject) { /* ... */ }
    ~~~

2.  Create the script tag:

    ~~~ {.html}
    <script src="http://server/api?jsonp=myCallback">
    </script>
    ~~~

3.  The browser fetches the URL, which contains:

    ~~~ {.javascript}
    myCallback({answer: "Windmill"});
    ~~~

4.  Your function is called with the requested data

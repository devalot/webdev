## Getting JavaScript into the Browser

### How the Browser Processes JavaScript

  - Parser continues to process HTML while downloading JS

  - Once downloaded, JS is executed and *blocks* the browser

  - Include the JS at the bottom of the page to prevent blocking

### Getting JavaScript into a Web Page

  - Preferred option:

    ~~~ {.html}
    <script src="somefilename.js"></script>
    ~~~

  - Inline in the HTML (yuck):

    ~~~ {.html}
    <script>
      var x = "Hey, I'm JavaScript!";
      console.log(x);
    </script>
    ~~~

  - Inline on an element (double yuck):

    ~~~ {.html}
    <button onclick="console.log('Hey there');"/>
    ~~~

### How JavaScript Affects Page Load Performance (Take Two)

  - The browser blocks when executing JS files
  - JS file will be downloaded then executed before browser continues
  - Put scripts in file and load them at the bottom of the page

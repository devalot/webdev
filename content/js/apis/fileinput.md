## File API

### What the File API Is, and Isn't

  * It's *not* a general-purpose I/O interface

  * It only lets you get basic info about user-selected files:
    - Name
    - Size
    - MIME type

  * A user selects a file with an `<input>` or using drag and drop

### Example: Chosen File Size

  * In the HTML:

    ~~~ {.html}
    <input type="file" id="the-input"/>
    ~~~

  * In the JavaScript (after the user picks a file):

    ~~~ {.javascript}
    var input = document.getElementById("the-input");
    var size = input.files[0].size;
    ~~~

### Browser Support

  - IE      >= 10
  - Firefox >= 3.0
  - Safari  >= 6.0
  - Chrome  >= 13
  - Opera   >= 11.5

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/File>

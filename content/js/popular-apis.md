# Popular JavaScript APIs

## The Web Storage API

### What is Web Storage?

  * Allows you to store key/value pairs

  * Two levels of persistence and sharing

  * Very simple interface

  * Keys and values *must* be strings

### Session Storage

  * Lifetime: same as the containing window/tab

  * Sharing: Only code in the same window/tab

  * 5MB user-changeable limit (10MB in IE)

  * Basic API:

    ~~~ {.javascript}
    sessionStorage.setItem("key", "value");
    var item = sessionStorage.getItem("key");
    sessionStorage.removeItem("key");
    ~~~

### Local Storage

  * Lifetime: unlimited

  * Sharing: All code from the same domain

  * 5MB user-changeable limit (10MB in IE)

  * Basic API:

    ~~~ {.javascript}
    localStorage.setItem("key", "value");
    var item = localStorage.getItem("key");
    localStorage.removeItem("key");
    ~~~

### The `Storage` Object

Properties and methods:

  * `length`: The number of items in the store.

  * `key(n)`: Returns the name of the key in slot `n`.

  * `clear()`: Remove all items in the storage object.

  * `getItem(key)`, `setItem(key, value)`, `removeItem(key)`.

<div class="notes">

More information about the `Storage` object can be found at:

<https://developer.mozilla.org/en-US/docs/Web/API/Storage>

</div>

### Browser Support

  - IE      >= 8
  - Firefox >= 2
  - Safari  >= 4
  - Chrome  >= 4
  - Opera   >= 10.50

### Documentation

  * <https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>

  * <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

## Cache Manifest Files (AppCache)

### What is the AppCache?

  * A server-side manifest file

  * Tells the browser which files to long-term cache

  * Allows a web site to work offline

### Example Manifest File

Add a `manifest` attribute to your HTML:

~~~ {.html}
<html manifest="/site.appcache">
  <!-- ... -->
</html>
~~~

Create the manifest file on your server:

~~~
CACHE MANIFEST

CACHE:
/favicon.ico
index.html
app.js
app.css

NETWORK:
*
~~~

### Server-side Requirements

  * The server must transmit the manifest file with the `Content-Type`
    set to `text/cache-manifest`

  * The server should send the correct cache and `E-Tag` headers to
    the browser to keep the browser from caching the manifest file too
    long

  * The manifest file should be generated server-side with comments in
    the file containing the `E-Tag` headers for each listed file

### Client-side Considerations

  * Once you start using application caching the cache becomes the
    default source for *all* requests

  * The browser will use the application cache even if the user is
    online

  * The browser won't allow network traffic back to the site for
    uncached resources by default

  * Make sure your manifest has a `NETWORK:` section with `*`

### Updating the Cache in Long-lived Applications

  #. Periodically (once a day) call `update`:

    ~~~ {.javascript}
    applicationCache.update();
    ~~~

  #. Listen for update events and notify the user:

    ~~~ {.javascript}
    (function(cache) {
      cache.addEventListener('updateready', function() {
        if (cache.status === cache.UPDATEREADY) {
          // Tell the user to reload the page.
        }
      });
    })(applicationCache);
    ~~~

### Browser Support

  - IE      >= 10
  - Firefox >= 3.5
  - Safari  >= 4
  - Chrome  >= 4
  - Opera   >= 11.5

### Further Reading

  * [A Beginner's Guide to Using the Application Cache][html5rocks-appcache]

  * [Offline Web Applications (Spec)][whatwg-offline]

[html5rocks-appcache]: http://www.html5rocks.com/en/tutorials/appcache/beginner/
[whatwg-offline]: https://html.spec.whatwg.org/multipage/browsers.html#offline

## Canvas

### Canvas: Two Drawing APIs

  * 2D drawing primitives via paths

  * 3D drawing via WebGL

  * Both can be hardware accelerated

  * Typically 60 FPS (if animating)

### Drawing a Circle: The HTML

~~~ {.html}
<canvas id="circle"></canvas>
~~~

### Drawing a Circle: JavaScript

~~~ {.javascript}
canvas  = document.getElementById("circle");
context = canvas.getContext("2d");

var path = new Path2D();
path.arc(75, 75, 50, 0, Math.PI * 2, true);
context.stroke(path);
~~~

### Browser Support

  - IE      >= 9
  - Firefox >= 1.5
  - Safari  >= 2
  - Chrome  >= 1
  - Opera   >= 9

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial>

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

## Geolocation

### Testing If Geolocation is Enabled

~~~ {.javascript}
if ("geolocation" in navigator) {
  // ...
}
~~~

### Getting the Browser's Location

~~~ {.javascript}
navigator.geolocation.getCurrentPosition(function(pos) {
  // ...
});
~~~

### Browser Support

  - IE      >= 9
  - Firefox >= 3.5
  - Safari  >= 5
  - Chrome  >= 5
  - Opera   >= 16

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation>

## Web Workers

### Web Worker Basics

  * Allows you to start a new background "thread"

  * Messages can be sent to and from the worker

  * Message handling is done through events

  * Load scripts with: `importScripts("name.js");`

### Browser Support

  - IE      >= 10
  - Firefox >= 3.5
  - Safari  >= 4
  - Chrome  >= 4
  - Opera   >= 10.6

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers>

## WebSockets

### WebSockets Basics

  * Full duplex connection to a server

  * Create your own protocol on top of WebSockets frames

  * Not subject to the same origin policy (SOP) or CORS

### How It Works

  #. The browser requests that a new HTTP connection be *upgraded* to
     a raw TCP/IP connection

  #. The server responds with `HTTP/1.1 101 Switching Protocols`

  #. A simple binary protocol is used to support bi-directional
     communications between the client and server over the upgraded
     port 80 connection

### Security Considerations

  * There are no host restrictions on WebSockets connections

  * Encrypt traffic and confirm identity when using WebSockets

  * Never allow foreign JavaScript to execute in a user's browser

### Browser Support

  - IE      >= 10
  - Firefox >= 6
  - Safari  >= 6
  - Chrome  >= 14
  - Opera   >= 12.10

### Documentation and Demos

  * [MDN: WebSockets API](https://developer.mozilla.org/en-US/docs/WebSockets)

  * [MDN: WebSockets Example](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

  * [socket.io: Popular Library](http://socket.io/)

## Server-Sent Events

### A Word About Server-Sent Events

  * Pros:
    * Simpler than WebSockets
    * One direction: server to browser
    * Uses HTTP, no need for a custom protocol
  * Cons:
    * Not supported in IE (any version)
    * Poor browser support in general (polyfills are available)
  * How:
    * Browser: use the `EventSource` global object
    * Server: just write messages to the HTTP connection
  * Docs:
    * See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

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

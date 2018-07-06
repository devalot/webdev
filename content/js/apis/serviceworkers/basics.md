### Service Worker Basics ###

  * Intended to replace AppCache

  * Can intercept network requests and decide how to respond (make
    real request, pull from cache, etc.)

  * Can cache all assets when started

  * Allows for complete offline experience

### Additional Uses of Service Workers ###

  * [Push notifications][] for mobile and desktop

  * [Background sync][] (wait for network connection, then send a request)

  * [Installable Web Apps][] (web apps that act like native mobile applications)

  * Work with a [Transactional High-Performance Key-Value Store][indexdb]

[push notifications]: https://developers.google.com/web/fundamentals/push-notifications/
[background sync]: https://developers.google.com/web/updates/2015/12/background-sync
[google primer]: https://developers.google.com/web/fundamentals/primers/service-workers/
[installable web apps]: https://developers.google.com/web/fundamentals/web-app-manifest/
[indexdb]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

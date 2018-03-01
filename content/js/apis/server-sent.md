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

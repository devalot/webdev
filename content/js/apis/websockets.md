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

<div class="notes">

### Documentation and Demos

  * [MDN: WebSockets API](https://developer.mozilla.org/en-US/docs/WebSockets)

  * [MDN: WebSockets Example](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

  * [socket.io: Popular Library](http://socket.io/)

</div>

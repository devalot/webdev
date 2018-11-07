// Exercise: A live chatroom!
//
// Insert three elements in the document:
//
//   1. A <ul> where incoming messages will be appended
//
//   2. A text input where you can write chat messages
//
//   3. A submit button so you can send chat messages
//
// Edit the <chat-box> attributes in the index.html file as instructed
// and then use those attributes to connect to a chat server over
// WebSockets.  Details on how to communicate with the chat server can
// be found here:
//
//   https://github.com/pjones/wschat
//
class ChatBox extends HTMLElement {
  // Set up the shadow DOM:
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    const template   = document.getElementById("chat-box-template");
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Create a new WebSocket and set up callbacks for sending and
  // receiving messages.
  //
  // If you get stuck here is an example implementation:
  //
  //   https://github.com/pjones/wschat/blob/master/examples/example.js
  connectedCallback() {
    const host = this.getAttribute("data-host");
    const code = this.getAttribute("data-code");
    const user = this.getAttribute("data-user");

    const form = this.shadowRoot.querySelector("form");
    const input = this.shadowRoot.querySelector('[name="msg"]');
    const ul   = this.shadowRoot.querySelector("ul");

    const socket = new WebSocket(`wss://${host}/${code}`);
    this.replayCache(ul);

    socket.onmessage = e => {
      const msg = JSON.parse(e.data);
      this.cacheMessage(msg);
      this.receiveMessage(ul, msg);
    };

    form.addEventListener("submit", e => {
      e.preventDefault();
      this.sendMessage(socket, user, input.value);
      input.value = "";
    });
  }

  receiveMessage(ul, msg) {
    const li = document.createElement("li");
    li.textContent = `${msg.sender}: ${msg.content}`;
    ul.appendChild(li);
  }

  sendMessage(socket, user, content) {
    const message = {sender: user, content};
    socket.send(JSON.stringify(message));
  }

  getCache() {
    const cache = sessionStorage.getItem("chat-cache") || JSON.stringify([]);
    return JSON.parse(cache);
  }

  cacheMessage(msg) {
    const cache = this.getCache();
    cache.push(msg);
    sessionStorage.setItem("chat-cache", JSON.stringify(cache));
  }

  replayCache(ul) {
    this.getCache().forEach(msg => this.receiveMessage(ul, msg));
  }
}

customElements.define("chat-box", ChatBox);

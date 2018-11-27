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

    const shadow = this.attachShadow({mode: "open"});
    const template = document.getElementById("chat-template");
    shadow.appendChild(template.content.cloneNode(true));
  }

  // Create a new WebSocket and set up callbacks for sending and
  // receiving messages.
  //
  // If you get stuck here is an example implementation:
  //
  //   https://github.com/pjones/wschat/blob/master/examples/example.js
  connectedCallback() {
    const button = this.shadowRoot.querySelector('[type="submit"]');
    const input = this.shadowRoot.querySelector('[name="content"]');
    const form = this.shadowRoot.querySelector("form");
    const ul = this.shadowRoot.querySelector("ul");

    const host = this.getAttribute("data-host");
    const user = this.getAttribute("data-user");
    const code = this.getAttribute("data-code");

    const socket = new WebSocket(`wss://${host}/${code}`);
    socket.onopen = () => button.disabled = false;

    socket.onmessage = e => {
      const message = JSON.parse(e.data);
      this.receiveChatMessage(message, ul);
      this.appendChatCache(message);
    };

    form.addEventListener("submit", e => {
      e.preventDefault();
      this.sendChatMessage(user, input.value, socket);
      input.value = "";
    });

    this.replayChatCache(ul);
  }

  getChatCache() {
    const cache = localStorage.getItem("chat-cache");
    const messages = JSON.parse(cache || "[]");
    return messages;
  }

  appendChatCache(message) {
    if (message.sender === "server") return;
    const messages = this.getChatCache();
    messages.push(message);
    localStorage.setItem("chat-cache", JSON.stringify(messages));
  }

  replayChatCache(ul) {
    this.getChatCache()
      .forEach(msg => this.receiveChatMessage(msg, ul));
  }

  receiveChatMessage(message, ul) {
    const li = document.createElement("li");
    li.textContent = `${message.sender}: ${message.content}`;
    ul.appendChild(li);
  }

  sendChatMessage(sender, content, socket) {
    socket.send(JSON.stringify({sender, content}));
  }
}

customElements.define("chat-box", ChatBox);

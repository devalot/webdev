class ChatBox extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'})
    const template = document.getElementById("chat-initial");
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.chatBoxInitialView = this.shadowRoot.querySelector("section");

    this.chatBoxInitialView.querySelector("form")
      .addEventListener("submit", e => {
        e.preventDefault();
        this.chatBoxJoinChat();
      });
  }

  chatBoxJoinChat() {
    this.shadowRoot.removeChild(this.chatBoxInitialView);

    this.chatBoxUserName = this.chatBoxInitialView.querySelector('[name="name"]').value;
    this.chatBoxAccessCode = this.chatBoxInitialView.querySelector('[name="code"]').value;

    this.chatBoxSocket = new WebSocket(`wss://wschat.devalot.com/${this.chatBoxAccessCode}`);

    this.chatBoxSocket.onopen = () => {
      const template = document.getElementById("chat-live");
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.chatBoxLiveView = this.shadowRoot.querySelector("section");
      this.chatBoxUL = this.chatBoxLiveView.querySelector("ul");

      this.chatBoxLiveView.querySelector("form")
        .addEventListener("submit", e => this.chatBoxSendMessage(e));
    };

    this.chatBoxSocket.onclose =   ()  => this.chatBoxLeaveChat();
    this.chatBoxSocket.onerror =   ()  => this.chatBoxLeaveChat();
    this.chatBoxSocket.onmessage = (e) => this.chatBoxReceiveMessage(e.data);
  }

  chatBoxLeaveChat() {
    if (this.chatBoxLiveView) {
      this.shadowRoot.removeChild(this.chatBoxLiveView);
      this.shadowRoot.appendChild(this.chatBoxInitialView);
      this.chatBoxLiveView = null;
      this.chatBoxUL = null;
    }
  }

  chatBoxReceiveMessage(msg) {
    if (!this.chatBoxUL) return;

    let decoded = JSON.parse(msg);
    let li = document.createElement("li");

    let sender = document.createElement("span");
    sender.classList.add("sender");
    sender.textContent = decoded.sender;
    li.appendChild(sender);

    let content = document.createElement("span");
    content.classList.add("content");
    content.textContent = decoded.content;
    li.appendChild(content);

    this.chatBoxUL.appendChild(li);
  }

  chatBoxSendMessage(e) {
    e.preventDefault();
    if (!this.chatBoxLiveView) return;

    let input = e.target.querySelector("input");
    let message = { sender: this.chatBoxUserName, content: input.value };

    input.value = "";
    this.chatBoxSocket.send(JSON.stringify(message));
  }
}

customElements.define("chat-box", ChatBox);

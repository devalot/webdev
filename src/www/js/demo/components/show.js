class ArtistDetail extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'})
    const template = document.getElementById("artists-show");
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.list = shadowRoot.querySelector("ul");
    this.details = shadowRoot.querySelector("details");
    this.details.addEventListener("toggle", e => this.showArtistAlbums(e));
  }

  connectedCallback() {
    // All of the element's attributes are now available.
    this.artistID = this.getAttribute("data-artist-id");
  }

  showArtistAlbums() {
    if (!this.details.open) return;
    getJSON(`/api/artists/${this.artistID}/albums`)
      .then(albums => {
        this.list.innerHTML = "";

        for (let album of albums) {
          let li = document.createElement("li");
          li.textContent = album.name;
          this.list.appendChild(li);
        }
      });
  }
}

customElements.define("artist-detail", ArtistDetail);

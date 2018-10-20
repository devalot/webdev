class ArtistList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'})
    const template = document.getElementById("artists-index");
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    getJSON("/api/artists")
      .then(artists => {
        let container = this.shadowRoot.querySelector('ul.artists');
        let list = document.createElement("artist-list");

        for (let artist of artists) {
          let element = document.createElement("artist-detail");
          element.setAttribute("data-artist-id", artist.id);

          let name = document.createElement("span");
          name.setAttribute("slot", "name");
          name.textContent = artist.name;
          element.appendChild(name);

          let year = document.createElement("span");
          year.setAttribute("slot", "year");
          year.textContent = artist.formation_year;
          element.appendChild(year);

          container.appendChild(element);
        }
      });
  }
}

customElements.define("artist-list", ArtistList);

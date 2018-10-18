class ArtistList extends HTMLElement {
  static bootstrap(id) {
    getJSON("/api/artists")
      .then(function(artists) {
        let container = document.getElementById(id);
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

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'})
    const template = document.getElementById("artists-index");
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("artist-list", ArtistList);

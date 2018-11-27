class ArtistDetail extends HTMLElement {

  // Exercise 3:
  //
  // Create a template for displaying a single artist.  The template
  // should use slots to display the name of the artist as well as the
  // formation year.
  //
  // When you are done, go back to the `index.js' component and have
  // it create `<artist-detail>' elements with the correct slots.
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const template = document.getElementById("artists-show");
    shadow.appendChild(template.content.cloneNode(true));

    // const p = document.createElement("p");
    // p.textContent = "Testing something here.";
    // shadow.appendChild(p);
  }

  // Bonus Exercise:
  //
  // Fetch all of the albums for artist and display them.
  //
  // Example URL for artist 2:
  //
  //   /api/artists/2/albums
  //
  // For an example, see: http://localhost:3000/js/demo/
  connectedCallback() {
    // const p = this.shadowRoot.querySelector("p");
    // p.addEventListener("click", function(e) {
    //   console.log("click in shadow root: ", e.target);
    // });
  }
}

customElements.define("artist-detail", ArtistDetail);

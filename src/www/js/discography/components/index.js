class ArtistList extends HTMLElement {

  // Exercise 1:
  //
  // Create a `<template>' in the index.html file that will be used to
  // display a list of all artists.  In the constructor below, fetch
  // that template and insert it into the shadow DOM.
  //
  // Your template should have a <ul> where you can insert artists in
  // the next exercise.
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const template = document.getElementById("artists-index");
    shadow.appendChild(template.content.cloneNode(true));
  }

  // Exercise 2:
  //
  // Fetch all artists from the backend and render them into the
  // template's `<ul>' element.  Start simple by just inserting the
  // the name of the artist.
  connectedCallback() {
    const go = async () => {
      const response = await fetch("/api/artists");
      const artists  = await response.json();
      const ul = this.shadowRoot.querySelector("ul");

      for (let a of artists) {
        const li = document.createElement("li");
        const details = document.createElement("artist-detail");

        const name = document.createElement("span");
        name.setAttribute("slot", "name");
        name.textContent = a.name;
        details.appendChild(name);

        const year = document.createElement("span");
        year.setAttribute("slot", "year");
        year.textContent = a.formation_year;
        details.appendChild(year);

        li.appendChild(details);
        ul.appendChild(li);
      }
    };

    go();
  }
}

customElements.define("artist-list", ArtistList);

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

    const shadowRoot = this.attachShadow({mode: 'open'});
    const template   = document.getElementById("artist-list-template");

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Exercise 2:
  //
  // Fetch all artists from the backend and render them into the
  // template's `<ul>' element.  Start simple by just inserting the
  // the name of the artist.
  //
  // When you are done, open the `show.js' component and continue.
  connectedCallback() {
    const ul = this.shadowRoot.querySelector("ul");

    const getArtists = async function() {
      const response = await fetch("/api/artists");
      const artists = await response.json();

      artists.forEach(a => {
        const li = document.createElement("li");
        const detail = document.createElement("artist-detail");

        const name = document.createElement("span");
        name.setAttribute("slot", "name");
        name.textContent = a.name;
        detail.appendChild(name);

        const year = document.createElement("span");
        year.setAttribute("slot", "year");
        year.textContent = a.formation_year;
        detail.appendChild(year);

        li.appendChild(detail);
        ul.appendChild(li);
      });
    };

    getArtists();
  }
}

customElements.define("artist-list", ArtistList);

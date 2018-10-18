// fetch from Node.js:
const fetch = require('node-fetch');

function post() {
  const url = "http://localhost:3000/api/artists";

  const data = {
    name: "Joywave",
    formation_year: "2010",
    website: "http://joywavemusic.com/",
  };

  // <<: post
  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {"Content-Type": "application/json; charset=utf-8"},
    body: JSON.stringify(data),
  })
  .then(function(response) {
    if (response.ok) return response.json();
    throw `expected ~ 200 but got ${response.status}`;
  })
  .then(console.log);
  // :>>
}

// Execute the POST:
post();

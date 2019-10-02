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
post()

// loading an image

const loadCage = () => {
  fetch('https://placecage.com/300/200')
    .then((response) => {
      if (response.ok) {
        response.blob().then((myBlob) => {
          var objectURL = URL.createObjectURL(myBlob)
          var img = document.getElementById('myImage')
          img.src = objectURL
        })
      } else {
        console.log('Network response was not ok.')
      }
    })

}

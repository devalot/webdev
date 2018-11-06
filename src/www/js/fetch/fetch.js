/******************************************************************************/
// The function below (getArtists) will be called once without an `id'
// argument and once with a numeric `id' argument.
//
// Using the `fetch' function, make an Ajax request for either all
// artists (when `id' is `undefined') or a single artist (when `id' is
// a number).
//
// Your function should fetch the JSON payload from the server,
// returning a Promise that resolves to the deserialized JSON data.
//
// To run your tests or debug, start your server and go to:
//
//   http://localhost:3000/js/fetch/
//
function getArtists(id) {
  let url = "/api/artists";
  if (id) url += `/${id}`;
  return fetch(url).then(r => r.json());
}

/**
 * The function below (getArtists) will be called once without an `id'
 * argument and once with a numeric `id' argument.
 *
 * Using the `fetch' function, make an Ajax request for either all
 * artists (when `id' is `undefined') or a single artist (when `id' is
 * a number).
 *
 * Your function should fetch the JSON payload from the server,
 * returning a Promise that resolves to the deserialized JSON data.
 */
export const getArtists = (id) => {
  const url = '/api/artists' + (id ? `/${id}` : '')
  return fetch(url)
    .then(response => response.json())

}

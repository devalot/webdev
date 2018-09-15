async function getArtist() {
  try {
    let response1 = await fetch("/api/artists/1");
    let artist = await response1.json();

    let response2 = await fetch("/api/artists/1/albums");
    artist.albums = await response2.json();

    return artist;
  } catch(e) {
    // Rejected promises throw exceptions
    // when using `await'.
  }
}

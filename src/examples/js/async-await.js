/******************************************************************************/
// Define `fetch' for Node.js:
function fetch() {
  let json = () => Promise.resolve({});
  return Promise.resolve({json});
}

/******************************************************************************/
// <<: async
async function example() {
  return "Hello World";
}

example().then(function(str) {
  console.log(str); // "Hello World"
});
// :>>

/******************************************************************************/
// <<: await
async function example2() {
  let str = await example();
  console.log(str); // "Hello World"
}
// :>>

let x = example2();
console.assert(x instanceof Promise);
x.then(y => console.assert(y === undefined));


/******************************************************************************/
// <<: getArtist
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
// :>>

let p = getArtist();
console.assert(p instanceof Promise);
p.then(o => console.assert(o.albums));

/******************************************************************************/
// <<: getArtistP
async function getArtistP() {
  // Kick off two requests in parallel:
  let p1 = fetch("/api/artists/1").then(r => r.json());
  let p2 = fetch("/api/artists/1/albums").then(r => r.json());

  // Wait for both requests to finish:
  let [artist, albums] = await Promise.all([p1, p2]);

  artist.albums = albums;
  return artist;
}
// :>>

let p1 = getArtistP();
console.assert(p1 instanceof Promise);
p1.then(o => console.assert(o.albums));

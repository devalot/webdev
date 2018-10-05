let r = new XMLHttpRequest();

r.addEventListener("load", function() {
  console.log(r.status);
  console.log(JSON.parse(r.responseText));
});

r.addEventListener("error", function() {
  console.log("error");
});

r.open("GET", "/api/artists");
r.send(); // or send(JSON.stringify(...));

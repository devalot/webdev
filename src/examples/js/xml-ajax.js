let request = new XMLHttpRequest();

// <<: load
request.addEventListener("load", function() {
  if (request.status >= 200 && request.status < 300) {
    let data = request.responseXML;
    let messages = data.getElementsByTagName("message");

    for (let i=0; i<messages.length; ++i) {
      console.log(messages[i].innerHTML);
    }
  }
});
// :>>

request.open("GET", "/xml");
request.send();

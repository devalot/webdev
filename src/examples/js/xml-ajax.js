var request = new XMLHttpRequest();

// <<: load
request.addEventListener("load", function() {
  if (request.status >= 200 && request.status < 300) {
    var data = request.responseXML;
    var messages = data.getElementsByTagName("message");

    for (var i=0; i<messages.length; ++i) {
      console.log(messages[i].innerHTML);
    }
  }
});
// :>>

request.open("GET", "/xml");
request.send();

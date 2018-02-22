// <<: factory
var Message = function(sender, content) {
  var m = Object.create(Message.prototype);

  m.sender  = sender;
  m.content = content;
  m.length  = content.length;

  return m;
};

Message.prototype = { /* ... */ };

var message = Message("pjones@devalot.com", "Hello");
// :>>

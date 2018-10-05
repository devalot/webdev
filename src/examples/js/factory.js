// <<: factory
let Message = function(sender, content) {
  let m = Object.create(Message.prototype);

  m.sender  = sender;
  m.content = content;
  m.length  = content.length;

  return m;
};

Message.prototype = { /* ... */ };

let message = Message("pjones@devalot.com", "Hello");
// :>>

// <<: ctor
var Message = function(sender, content) {
  this.sender  = sender;
  this.content = content;
};
// :>>

// <<: prototype
Message.prototype.send = function() {
  if (this.content.length !== 0) {
    console.log(this.sender, this.content);
  }
};
// :>>

// <<: new
var m = new Message("pjones@devalot.com", "Hello");
m.send(); // calls `Message.prototype.send'
          // with `this' set to `m'
// :>>

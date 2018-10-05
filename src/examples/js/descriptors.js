// <<: get-set
function Car() {
  this._speed = 0;
}

Object.defineProperty(Car.prototype, "speed", {
  get: function() { return this._speed; },

  set: function(x) {
    if (x < 0 || x > 100) throw "I don't think so";
    this._speed = x;
  }
});

let toyota = new Car();
toyota.speed = 55; // Calls the `set' function.
// :>>

console.assert(toyota.speed === 55);

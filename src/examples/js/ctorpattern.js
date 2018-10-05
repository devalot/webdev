function Car (color) {
  this.color = color;
}

Car.prototype.goFast = function() {
  this.speed = 130;
};

let toyota = new Car("brown");
toyota.goFast();

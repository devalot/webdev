function Car (color) {
  let newCar = Object.create(Car.prototype);

  newCar.color = color;

  return newCar;
}

Car.prototype = {
  goFast: function() {
    this.speed = 130;
  }
};

let toyota = Car("brown");
toyota.goFast();

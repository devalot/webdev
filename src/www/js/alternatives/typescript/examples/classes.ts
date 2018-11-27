// <<: person
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// :>>

// <<: car
class Car {
  constructor(public make: string) {}
}

let c = new Car("Toyota");
console.log(c.make); // Toyota
// :>>

/******************************************************************************/
// The Java Builder Pattern (adjusted for JavaScript)
let Builder = function(properties) {
  let constructor = function() {
    this.values = {};
  };

  let set = function(name) {
    return function(value) {
      this.values[name] = value;
      return this;
    };
  };

  for (let p in properties) {
    constructor.prototype[p] = set(p);
  }

  constructor.prototype.create = function(object) {
    for (let p in properties) {
      if (properties[p] && !this.values[p]) {
        throw(p + " is not allowed to be null or undefined");
      }

      object[p] = this.values[p];
    }
  };

  return constructor;
};

/******************************************************************************/
// Using it.
let Person = function(builder) {
  if (!(builder instanceof Person.Builder)) throw("not a builder!");
  builder.create(this);
};

Person.Builder = Builder({
  firstName:  true,             // Mandatory.
  lastName:   true,             // Mandatory.
  middleName: false,            // Optional.
  age:        false,            // Optional.
});

let builder = new Person.Builder();
builder.firstName("Peter").lastName("Jones");

let person = new Person(builder);
console.log(person);

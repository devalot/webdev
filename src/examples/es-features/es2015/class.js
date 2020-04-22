// <<: rec
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

const rect = new Rectangle(10, 20)
rect.area() // 200
// :>>

// <<: sq
class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }

  sideSize() {
    return this.width
  }
}

const sq = new Square(10)
sq.sideSize() // 10
sq.area() // 100
// :>>

// <<: get-set
class Car {
  constructor() {
    this._speed = 0
  }

  get speed() { return this._speed }

  set speed(x) {
    if (x < 0 || x > 100) throw 'Nope'
    this._speed = x
  }
}

const toyota = new Car()
toyota.speed = 101 // 'Nope'
toyota.speed = 50
// :>>

console.assert(toyota.speed === 55)

const makeCounter = () => {
  let id = 1
  return () => id++
}

// <<: static
class User {
  static nextId = makeCounter()

  constructor(name) {
    this.id = User.nextId()
  }
}

const user1 = new User('Andrew')
user1.id // 1
// :>>

// <<: static-2
class User {
  static defaultProps = { name: 'USER' }

  constructor(name) {
    this.name = name || User.defaultProps.name
  }
}

const user2 = new User()
user2.name // 'USER'
// :>>

const staticFactory = () => {
  // <<: static-factory
  class Rectangle {
    static with4To6Ratio = width => {
      return new Rectangle(width, (width * 6) / 4)
    }

    // ...
  }
  const rect = Rectangle.with4To6Ratio(10)
  rect.width // 10
  rect.height // 15
  // :>>

}

// <<: instance-constructor
class Counter {
  static nextId = makeCounter()
  id = Counter.nextId()
}

const counter = new Counter()
counter.id // 1
// :>>

// <<: private-field
class Counter {
  #counter

  constructor() {
    this.#counter = 1
  }

  count() { return this.#counter++ }
}

const counter = new Counter()
counter.count() // 1
counter.count() // 2
counter.counter // undefined
// :>>

// <<: private-instance-field
class Counter {
  #counter = 1
  count() { return this.#counter++ }
}
// :>>

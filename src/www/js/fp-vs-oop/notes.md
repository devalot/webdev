
```js
// Functional inheritance

const createHuman = (name) => {
  return {
    name: name,
    sayHello: () => { console.log(name) }
  }
}

const canJump = (something) => {
  return {
    ...something,
    jump: () => { console.log('I jumped!') }
  }
}

canJump(createHuman('Andrew'))

// raw data object

const human = {
  sayHello() { console.log(this.name) }
}

const andrew = Object.create(human)
andrew.name = 'Andrew'

andrew.sayHello()

// constructor pattern

function Human(name) {
  this.name = name
}
Human.prototype.sayHello = function() {console.log(this.name)}

const billy = new Human('billy')
billy.sayHello()

// class syntax

class Human {
  constructor(name) {
    this.name = name
  }
  sayHello() { console.log(this.name) }
}

const charlie = new Human('charlie')
charlie.sayHello()



```

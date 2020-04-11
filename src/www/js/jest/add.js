export const add = (a, b) => a + b

export const addObjectToList = (list, obj) => {
  return list.concat(obj)
}

export class Human {
  constructor(name) {
    this.name = name
  }

  getName() { return this.name }
  getRandomNumber() {
    return this.thinkOfRandomNumber()
  }
  thinkOfRandomNumber() {
    return Math.floor(Math.random()*10)
  }
}

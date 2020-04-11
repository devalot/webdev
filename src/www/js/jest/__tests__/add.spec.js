import { add, addObjectToList, Human } from '../add'

describe('#add', () => {
  it('should add two numbers together', () => {
    expect(add(40, 2)).toEqual(42)
    expect(add(40, 2)).toBeGreaterThan(40)
    expect(add(40, 2)).toBeDefined()
    expect(add(40, 2)).not.toEqual(0)
  })
})

describe('#addObjectToList', () => {
  it('should add an object', () => {
    const list = [1, 2, 3]
    const obj = { name: 'Andrew' }
    const newList = addObjectToList(list, obj)
    expect(newList).toEqual([
      1, 2, 3, { name: 'Andrew' },
    ])
    expect(newList).toContainEqual(obj)
    expect(newList).toContainEqual({ name: 'Andrew' })
  })
})

describe('#Human', () => {
  it('should have a name', () => {
    const human = new Human('Andrew')
    expect(human.getName()).toEqual('Andrew')
  })

  it('should be able to get a random number', () => {
    const human = new Human('Andrew')
    human.thinkOfRandomNumber = jest.fn(() => 42)
    expect(human.getRandomNumber()).toEqual(42)
    expect(human.thinkOfRandomNumber.mock.calls).toEqual([[]])
  })
})

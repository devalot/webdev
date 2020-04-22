import { Parent, Person } from './fn-inheritance'

describe('Person', () => {
  it('should have a species shared across all instances', () => {
    const person1 = new Person()
    const person2 = new Person()

    expect(person1.species.name).toEqual('Homo sapien')
    expect(person1.species).toEqual(person2.species)
  })

  it('should accept a name', () => {
    const person1 = new Person('Bert', 'Smith')
    expect(person1.first).toEqual('Bert')

    const person2 = new Person('Billy')
    expect(person2.first).toEqual('Billy')
  })

  it('should compute the full name as a getter', () => {
    const person1 = new Person('Bert', 'Smith')
    expect(person1.fullName).toEqual('Bert Smith')

    person1.first = 'Billy'
    expect(person1.fullName).toEqual('Billy Smith')
  })

  it('should increment their age', () => {
    const person1 = new Person('Bert', 'Smith')
    person1.haveBirthday()
    person1.haveBirthday()
    person1.haveBirthday()
    expect(person1.age).toEqual(3)

    person1.haveBirthday(42)
    expect(person1.age).toEqual(42)
  })
})

describe('Parent', () => {
  it('should have Person behavior', () => {
    const parent = new Parent('Harry', 'Potter')
    expect(parent.first).toEqual('Harry')
    expect(parent.fullName).toEqual('Harry Potter')

    parent.haveBirthday(30)
    expect(parent.age).toEqual(30)
  })

  it('should have specialized behavior', () => {
    const parent = new Parent('David', 'Hardy')

    const alice = parent.haveChild('Alice')
    alice.haveBirthday()
    expect(alice.fullName).toEqual('Alice Hardy')
    expect(alice.age).toEqual(1)

    const sue = parent.haveChild('Sue')

    expect(parent.getChildren()).toEqual([alice, sue])
  })
})

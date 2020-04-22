describe('Creating inheritance', () => {
  const person = {
    species: 'Homo sapien',
    fullName() { return `${this.first} ${this.last}` }
  }

  it('make an object that has person as its prototype', () => {
    const instructor = doSomething()
    instructor.first = 'Andrew'
    instructor.last = 'Smith'
    expect(instructor.fullName()).toEqual('Andrew Smith')
    expect(instructor.species).toEqual('Homo sapien')
  })

  it('make a #makePerson function that points to `person` as prototype', () => {
    // makePerson should take a `first` and `last` to give to the created object
    const makePerson = () => {}

    const instructor = makePerson('Andrew', 'Smith')
    expect(instructor.fullName()).toEqual('Andrew Smith')
    expect(instructor.species).toEqual('Homo sapien')
  })

  it('write a function that tells how many prototype hops is needed to find a prop', () => {
    const baconNumber = () => {}

    const a = { color: 'green' }
    const b = Object.create(a)
    b.speed = 100
    const c = Object.create(b)
    c.id = 42

    expect(baconNumber(c, 'id')).toEqual(0)
    expect(baconNumber(c, 'speed')).toEqual(1)
    expect(baconNumber(c, 'color')).toEqual(2)
    expect(baconNumber(c, 'notFound')).toEqual(-1)
  })
})

describe('this', () => {
  it('EXERCISE 1: should give an age and an function #isAdult which checks if age is >= 18', () => {
    const person = {}

    expect(person.isAdult()).toEqual(false)
  })

  it('EXERCISE 2: fix this code', () => {
    const c = {
      color: 'green',
      getColor: () => {
        return this.color
      }
    }

    expect(c.getColor()).toEqual('green')
  })

  it('EXERCISE 3: fix this code', () => {
    const greeter = {
      message: 'Hello',
      print() {
        function otherFn() {
          expect(this.message).toEqual('Hello')
        }

        otherFn()
      }
    }

    greeter.print()
  })

  it('EXERCISE 4: fix this code', () => {
    const a = {
      color: 'red',
      getColor() {
        return this.color
      }
    }

    const getColor = a.getColor

    expect(getColor()).toEqual('red')
  })

  it('EXERCISE 5: fix this code', () => {
    const getAge = () => this.age

    const p1 = {
      age: 42,
      getAge
    }

    expect(p1.getAge()).toEqual(42)
  })
})


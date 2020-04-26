describe('ES2015 syntax', () => {
  describe('declarations', () => {
    it('rewrite to use const and let declarations', () => {
      /**
       * Assume the codebase uses `let` declarations only for variables
       * that are reassigned. Use `const` otherwise.
       */
      let a = 4
      const b = [1, 2, 3]

      if (b.length < 4) b.push(a)
      expect(b).toEqual([1, 2, 3, 4])

      a = 2
      const c = [1, a, 3]
      expect(c).toEqual([1, 2, 3])
    })
  })

  describe('loops', () => {
    it('rewrite the for loop to use a let variable', () => {
      const nums = []
      for (let i = 0; i < 3; i++) {
        nums.push(i)
      }
      expect(nums).toEqual([0, 1, 2])
    })
  })

  describe('object shorthand', () => {
    it('rewrite using object function shorthand', () => {
      const person = {
        name: 'Andrew',
        getName() { return this.name }
      }
      expect(person.getName()).toEqual('Andrew')
    })

    it('rewrite using object property shorthand', () => {
      const name = 'Andrew'
      const person = { name }
      expect(person.name).toEqual('Andrew')
    })
  })

  describe('functions', () => {
    it('rewrite the function declaration with arrow syntax', () => {
      const foo = () => {
        return 'foo'
      }
      expect(foo()).toEqual('foo')
    })

    it('rewrite the function declaration, and use implicit return for anonymous function', () => {
      const addOneToValues = (xs) => {
        if (xs.length < 1) throw new Error('Values required')
        // HINT: you can use an implicit return arrow function by omitting the curly brackets
        return xs.map(x => x + 1)
      }

      expect(addOneToValues([1, 2, 3])).toEqual([2, 3, 4])
      expect(() => addOneToValues([])).toThrow('Values required')
    })

    it('rewrite the logic in the function to use default parameters', () => {
      const getIndexOfFoo = (str = '') => str.indexOf('foo')

      expect(getIndexOfFoo('hello foo bar')).toEqual(6)
      expect(getIndexOfFoo()).toEqual(-1)
    })
  })

  describe('array spread and destructuring', () => {
    it('rewrite using array destructuring', () => {
      const favoriteThings = ['tea', 'chocolate', 'bicycles', 'mangoes']
      const [tea, chocolate, ...others] = favoriteThings
      expect(tea).toEqual('tea')
      expect(chocolate).toEqual('chocolate')
      expect(others).toEqual(['bicycles', 'mangoes'])
    })

    it('rewrite to use rest parameters', () => {
      const addNToNumbers = (n, ...nums) => nums.map(val => val + n)
      expect(addNToNumbers(3, 1, 2, 5)).toEqual([4, 5, 8])
    })

    it('rewrite using spread syntax to shallow-copy an array', () => {
      const copyArray = (arr) => [...arr]

      const arr1 = [1, 2, 3]
      const copy = copyArray(arr1)

      expect(copy).toEqual([1, 2, 3])
      expect(arr1 === copy).toEqual(false)
    })

    it('rewrite using spread syntax to duplicate the contents of an array', () => {
      const duplicateArrayContents = (arr) => [...arr, ...arr]

      expect(duplicateArrayContents([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3])
    })

    it('CHALLENGE: rewrite using spread syntax to duplicate and reverse contents of an array', () => {
      const duplicateAndReverseArrayContents = (arr) => [...arr, ...[...arr].reverse()]

      expect(duplicateAndReverseArrayContents([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1])
    })
  })
})

describe('ES2018 syntax', () => {
  describe('object spread and destructuring', () => {
    it('rewrite using object destructuring', () => {
      const person = { id: 42, name: 'Andrew', location: 'Seattle' }
      const { id, name, location } = person
      expect(id).toEqual(42)
      expect(name).toEqual('Andrew')
      expect(location).toEqual('Seattle')
    })

    it('rewrite using object spread and destructuring', () => {
      const withoutKey = (keyToRemove, obj) => {
        const { [keyToRemove]: ignore, ...copy } = obj
        return copy
      }

      const person = { id: 42, name: 'Andrew', location: 'Seattle' }
      expect(withoutKey('id', person)).toEqual({ name: 'Andrew', location: 'Seattle' })
      expect(withoutKey('location', person)).toEqual({ id: 42, name: 'Andrew' })
      // should not be mutating `person`
      expect(person).toEqual({ id: 42, name: 'Andrew', location: 'Seattle' })
    })

    it('use object destructuring with a key rename', () => {
      const person = { id: 42, name: 'Andrew', location: 'Seattle' }
      const { id: personId } = person // destructure this, but keep the variable name `personId`
      expect(personId).toEqual(42)
    })
  })
})

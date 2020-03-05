describe('Functional Programming', () => {
  describe('basic FP toolkit', () => {
    describe('#prop', () => {
      it('should extract a prop off an object', () => {
        const getId = undefined // TODO no anonymous function
        const getName = undefined // TODO no anonymous function
        const person = { id: 1, name: 'Andrew' }
        expect(getId(person)).toEqual(1)
        expect(getName(person)).toEqual('Andrew')
      })
    })

    describe('#map', () => {
      it('should add 1 to each number in array', () => {
        const numbers = [1, 2, 3]
        const add1 = x => x + 1
        const add1ToNumbers = undefined // TODO no anonymous function
        expect(add1ToNumbers(numbers)).toEqual([2, 3, 4])
      })

      it('should load all the URLs and then return', async () => {
        const fakeGet = (x) => Promise.resolve(x.substring(1))
        const urls = ['/foo.img', '/bar.img', '/baz.img']
        const loadImages = undefined // TODO no anonymous function
        expect(await Promise.all(loadImages(urls))).toEqual(['foo.img', 'bar.img', 'baz.img'])
      })

      it('should extract a specific property off each object in an array', () => {
        const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
        const pluck = undefined // TODO don't use any anonymous functions
        expect(pluck('name', data)).toEqual(['Alice', 'Bob', 'Charlie'])
      })

      it('should uppercase all the words in the array', () => {
        const words = ['foo', 'bar', 'baz']
        const uppercase = R.toUpper
        const shoutWords = undefined // TODO no anonymous functions
        expect(shoutWords(words)).toEqual(['FOO', 'BAR', 'BAZ'])
      })

      it('should hydrate an array of object IDs with their object', () => {
        const data = {
          1: { id: 1, name: 'Alice' },
          2: { id: 2, name: 'Bob' },
          3: { id: 3, name: 'Charlie' },
        }
        const ids = [1, 3]
        const lookup = R.flip(R.prop)
        const lookupData = lookup(data)
        const hydrate = R.map(lookupData)
        expect(hydrate(ids)).toEqual([{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }])
      })
    })

    describe('#filter', () => {
      it('should return an array with only four-letter words', () => {
        const data = ['aba', 'abba', 'abcd', 'abcde', 'abbad']
        const onlyFourLetters = R.compose(R.equals(4), R.length)
        const findFourLetterWords = undefined // TODO
        expect(findFourLetterWords(data)).toEqual(['abba', 'abcd'])
      })
    })

    describe('#reject', () => {
      it('should filter out objects that do not have an avatar', () => {
        const data = [
          { id: 1, name: 'Alice', profilePhoto: 'alice.img' },
          { id: 2, name: 'Bob', profilePhoto: 'bob.img' },
          { id: 3, name: 'Charlie' },
        ]
        const missingProfilePhoto = R.compose(R.isNil, R.prop('profilePhoto'))
        const removeObjectsMissingProfilePhoto = R.reject(missingProfilePhoto)
        expect(missingProfilePhoto(data)).toEqual([data[0], data[1]])
      })
    })
  })

  describe('#assoc', () => {
    it('should update the key of an object', () => {
      const obj1 = { done: false }
      const markDone = undefined // TODO no anonymous functions!
      const result = markDone(obj1)
      expect(result).toEqual({ done: true })
      expect(obj1 === result).toEqual(false)
    })

    it('should be usable with other utility functions', () => {
      const data = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const addFoo = undefined // TODO no anonymous functions!
      expect(addFoo(data)).toEqual([{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }, { id: 3, foo: 'bar' }])
    })

    it('should be usable with indexes', () => {
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      // tip: use R.map, it works on objects
      const addFoo = undefined // TODO no anonymous functions!
      expect(addFoo(data)).toEqual({
        1: { id: 1, name: 'Alice', foo: 'bar' },
        2: { id: 2, name: 'Bob', foo: 'bar' },
        3: { id: 3, name: 'Charlie', foo: 'bar' },
      })
    })
  })
})

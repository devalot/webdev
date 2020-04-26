describe('Array higher-order functions', () => {
  const users = [
    { id: 1, name: 'Andrew', age: 33, favoriteColor: 'blue' },
    { id: 2, name: 'Billy', age: 20, favoriteColor: 'red' },
    { id: 3, name: 'Cynthia', age: 57, favoriteColor: 'green' },
  ]

  describe('#forEach', () => {
    it('rewrite the for loop with forEach', () => {
      const mockFn = jest.fn()

      // element, index, array
      users.forEach(mockFn)

      expect(mockFn.mock.calls.length).toEqual(3)
      expect(mockFn.mock.calls).toEqual([
        [users[0]],
        [users[1]],
        [users[2]],
      ])
    })
  })

  describe('#filter', () => {
    it('rewrite the filter operation without a for loop', () => {
      const usersWithFavoriteColorBlue = users.filter((user) => user.favoriteColor === 'blue')
      expect(usersWithFavoriteColorBlue).toEqual([users[0]])
    })

    it('write a function #reject that does the opposite of #filter and uses that method', () => {
      const complement = (fn) => x => !fn(x)
      const reject = (pred, array) => array.filter(complement(pred))
      const usersWithoutFavoriteColorblue = reject(user => user.favoriteColor === 'blue', users)
      expect(usersWithoutFavoriteColorblue).toEqual([users[1], users[2]])
    })
  })

  describe('#every', () => {
    it('implement the #every method', () => {
      // === Uncomment me and implement ===
      Array.prototype.every = function (pred) {
        let result = true
        this.forEach(el => {
          if (!pred(el)) result = false
        })
        return result
      }
      expect([1, 2, 3].every(x => x > 0)).toEqual(true)
      expect([1, 2, 3].every(x => x > 2)).toEqual(false)
    })
  })

  describe('#some', () => {
    it('implement the #some method', () => {
      // === Uncomment me and implement ===
      Array.prototype.some = function (pred) {
        let result = false
        this.forEach(el => {
          if (pred(el)) result = true
        })
        return result
      }
      expect([1, 2, 3].some(x => x > 2)).toEqual(true)
      expect([1, 2, 3].some(x => x > 4)).toEqual(false)
    })
  })

  describe('#map', () => {
    it('rewrite using #map', () => {
      const incrementAgeOfHumans = (humans) => humans.map((human) => ({ ...human, age: human.age + 1 }))

      expect(incrementAgeOfHumans(users)).toEqual([
        { id: 1, name: 'Andrew', age: 34, favoriteColor: 'blue' },
        { id: 2, name: 'Billy', age: 21, favoriteColor: 'red' },
        { id: 3, name: 'Cynthia', age: 58, favoriteColor: 'green' },
      ])
    })
  })

  describe('#reduce', () => {
    it('rewrite using reduce', () => {
      const doubleSum = (vals) => (
        vals.reduce((acc, val) => acc + val * 2, 0)
      )

      expect(doubleSum([1, 2, 3])).toEqual(2 + 4 + 6)
    })

    it('rewrite #flatten using reduce', () => {
      // TIP: Use Array#concat to join two arrays together immutably
      const flatten = (tuples) => tuples.reduce((acc, tuple) => acc.concat(tuple))
      expect(flatten([[0, 1], [2, 3, 4], [5], []])).toEqual([0, 1, 2, 3, 4, 5])
    })

    it('rewrite #groupByName using reduce', () => {
      const groupByName = (arr) => {
        return arr.reduce(
          (acc, val) => {
            const currentVal = acc[val] || 0
            acc[val] = currentVal + 1
            return acc
          },
          {}
        )
      }
      const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
      expect(groupByName(names)).toEqual({ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 })
    })
  })
})

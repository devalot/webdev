const { compose, map, prop } = require('ramda')

// <<: implementation
const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
}
// :>>

// <<: static-imp
const getUserName = (id, lookupUser) => {
  const user = lookupUser(id)
  return user.name
}
// :>>

// <<: dynamic-imp
const getUserNames = (ids, lookupUser) => (
  map(compose(prop('name'), lookupUser), ids)
  // aka: ids.map(lookupUser).map(user => user.name)
)
// :>>

describe('mock functions', () => {
  // <<: capture
  it('capture calls', () => {
    const mockCallback = jest.fn()
    forEach([0, 1], mockCallback)

    expect(mockCallback.mock.calls.length).toEqual(2)
    expect(mockCallback.mock.calls).toEqual([[0], [1]])
  })
  // :>>

  it('should capture all arguments', () => {
    // <<: capture-args
    const myMock = jest.fn()
    myMock('hello', 'world')
    myMock(1, 2, 3)
    expect(myMock.mock.calls).toEqual([
      ['hello', 'world'],
      [1, 2, 3],
    ])
    // :>>
  })

  // <<: static-test
  it('should specify behavior', () => {
    const mockFn = jest.fn(() => ({
      id: 1,
      name: 'Andrew'
    }))
    expect(getUserName(1, mockFn))
      .toEqual('Andrew')
  })
  // :>>

  // <<: dynamic-test
  it('should handle dynamic behavior', () => {
    const mockUsers = {
      1: { id: 1, name: 'Andrew' },
      2: { id: 2, name: 'Billy' },
      3: { id: 3, name: 'Charlie' },
    }
    const mockLookup = jest.fn((id) => mockUsers[id])

    expect(getUserNames([1, 3], mockLookup))
      .toEqual(['Andrew', 'Charlie'])
  })
  // :>>

  // <<: mock-return
  it('should mock return values', () => {
    const mock = jest.fn()
      .mockReturnValueOnce(42)
      .mockReturnValueOnce('hello')
      .mockReturnValue('default')

    expect(mock()).toEqual(42)
    expect(mock()).toEqual('hello')
    expect(mock()).toEqual('default')
  })
  // :>>
})

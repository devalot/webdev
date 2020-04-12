// <<: implementation
const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[index])
  }
}
// :>>

// <<: static-imp
const getUserName = (id, lookupUser) => {
  const user = lookupUser(id)
  return user.name
}
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
})

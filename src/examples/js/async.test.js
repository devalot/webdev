// <<: fake-server
const users = {
  1: { id: 1, name: 'Andrew' },
  2: { id: 2, name: 'Billy' },
}

const getUser = (id) => (
  new Promise((res, rej) => {
    process.nextTick(() => (
      users[id]
        ? res(users[id])
        : rej('User ID ' + id + ' not found.')
    ))
  })
)
// :>>

// <<: async-await
it('should handle async', async () => {
  const user = await getUser(1)
  expect(user).toEqual({ id: 1, name: 'Andrew' })
})
// :>>

// <<: async-await-resolves
it('should handle async', async () => {
  return await expect(getUser(1))
    .resolves.toEqual({ id: 1, name: 'Andrew' })
})
// :>>

// <<: async-promise
it('should handle async', () => {
  return getUser(1)
    .then((res) => {
      expect(res).toEqual({ id: 1, name: 'Andrew' })
    })
})
// :>>

// <<: async-resolves
it('should handle async', () => {
  return expect(getUser(1))
    .resolves.toEqual({ id: 1, name: 'Andrew' })
})
// :>>

// <<: async-fail-await
it('should catch errors', async () => {
  try {
    await getUser(42)
  } catch (e) {
    expect(e).toEqual('User ID 42 not found.')
  }
})
// :>>

// <<: async-fail-await-broken
it('does not fail :-(', async () => {
  try {
    await getUser(1)
  } catch (e) {
    expect(1).toEqual(0) // Still passes!
  }
})
// :>>

// <<: async-fail-rejects
it('should return error message', async () => {
  await expect(getUser(42))
    .rejects.toEqual('User ID 42 not found.')
})
// :>>

// <<: async-dependency
const getUserName = async (id) => {
  const user = await getUser(id)
  return user.name
}

it('can still await with resolves', async () => {
  return await expect(getUserName(2))
    .resolves.toEqual('Billy')
})
// :>>

// <<: async-background
const loadUserInBackground = (id, callback) => {
  getUser(id).then(callback)
  // aka:
  // getUser(id)
  //   .then((user) => callback(user))

  return 'Done!'
}
// :>>

// <<: async-flush
const flushPromises = () => (
  new Promise(res => process.nextTick(res))
)

it('can have promises flushed', async () => {
  const mockFn = jest.fn()
  loadUserInBackground(1, mockFn)
  await flushPromises()
  expect(mockFn)
    .toHaveBeenCalledWith({ id: 1, name: 'Andrew' })
})
// :>>

// <<: boom
const boom = async () => {
  throw new Error('kaboom')
}
// :>>

// <<: boom-toThrow
it('will match with toThrow', async () => {
  return await expect(boom())
    .rejects.toThrow('kaboom')
})
// :>>

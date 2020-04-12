const { find, propEq } = require('ramda')

const todos = [
  { id: 1, text: 'Learn Jest' },
  { id: 2, text: 'Learn async' },
  { id: 3, text: '???' },
  { id: 4, text: 'Profit 💸' },
]

const getTodos = () => (
  new Promise((res) => {
    process.nextTick(() => {
      res(todos)
    })
  })
)

const getTodo = async (id) => {
  const todos = await getTodos()
  const todo = find(propEq('id', id), todos)

  if (!todo) throw new Error(`Todo ID ${id} not found`)
  // if (!todo) return Promise.reject(`Todo ID ${id} not found`)

  return todo
}

describe('Async tests', () => {
  describe('#getTodos', () => {
    it.todo('should work with async/await')

    it.todo('should work with await + resolves')

    it.todo('should work by returning a promise')
  })

  describe('#getTodo', () => {
    it.todo('should find a todo')

    // it.todo('should throw error when todo not found')
    it('should throw error when todo not found', async () => {
      return await expect(getTodo(42))
        .rejects.toThrow('Todo ID 42 not found')
    })

    // TODO what's wrong with this test?
    it('should throw an error for missing todo', async () => {
      try {
        await getTodo(1)
      } catch (e) {
        expect(1).toEqual(0)
      }
    })
  })
})

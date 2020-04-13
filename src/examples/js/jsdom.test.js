// <<: jsdom-add-todo
const addTodoToDOMList = (text) => {
  const todos = document.getElementById('todos')

  const todo = document.createElement('li')
  todo.appendChild(document.createTextNode(text))

  todos.appendChild(todo)
}
// :>>

describe('addTodoToDOMList', () => {
  // <<: jsdom-test-setup
  beforeEach(() => {
    // set up the browser DOM
    document.body.innerHTML = '<ul id="todos"></ul>'
  })
  // :>>

  // <<: jsdom-test
  it('should add a todo to the todos', () => {
    addTodoToDOMList('Learn jsdom')
    addTodoToDOMList('Practice DOM changes')

    const todos = document.getElementById('todos')
    expect(todos.children.length).toEqual(2)

    const todosText = Array.from(todos.children)
      .map(child => child.textContent)
    expect(todosText).toEqual([
      'Learn jsdom',
      'Practice DOM changes',
    ])
    // :>>
  })
})

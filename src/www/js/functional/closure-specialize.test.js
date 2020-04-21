// general
const prop = () => {}
const groupBy = () => {}

// specialized
const getId = prop('id')
const getName = prop('name')
const getColor = prop('favoriteColor')

describe('Closures: Specializing Behavior', () => {
  const users = [
    { id: 1, name: 'Andrew', admin: true, favoriteColor: 'blue' },
    { id: 2, name: 'Billy', admin: false, favoriteColor: 'red' },
    { id: 3, name: 'Cynthia', admin: false, favoriteColor: 'red' },
    { id: 4, name: 'Dorothy', admin: false, favoriteColor: 'green' },
  ]
  const [andrew, billy, cynthia, dorothy] = users

  it('implement #prop', () => {
    expect(getId(andrew)).toEqual(1)
    expect(getName(andrew)).toEqual('Andrew')
  })

  it('implement #groupBy', () => {
    const groupedByColor = groupBy(getColor)
    expect(groupedByColor).toEqual({
      blue: [andrew],
      red: [billy, cynthia],
      green: [dorothy],
    })
  })

  it('rewrite these anonymous functions as a single generalized function', () => {
    // HINT should look something like:
    // setSize12 = setFontSize(12)
    const setSize12 = () => { document.body.style.fontSize = '12px' }
    const setSize14 = () => { document.body.style.fontSize = '14px' }

    setSize12()
    expect(document.body.style.fontSize).toEqual('12px')
    setSize14()
    expect(document.body.style.fontSize).toEqual('14px')
  })

  it('should create specialized click handlers', () => {
    const toggleCart = () => {} // TODO

    const items = [
      { id: 0, cart: true, onClick: toggleCart(0) },
      { id: 1, cart: false, onClick: toggleCart(1) },
      { id: 2, cart: false, onClick: toggleCart(2) },
    ]

    items[0].onClick()
    expect(items[0].cart).toEqual(false)
    items[0].onClick()
    expect(items[0].cart).toEqual(true)
    items[2].onClick()
    expect(items[2].cart).toEqual(true)
  })
})

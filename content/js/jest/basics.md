## Jest: Basics

### What is Jest? ###

  * JS testing framework

  * Focus on simplicity and easy configuration

  * Easy mocking of modules

  * Good for unit and integration tests

### Example: Writing Jest Tests ###

~~~ {.javascript}
const add = (x, y) => x + y

describe('#add', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
~~~

### Running Jest Tests

  #. `yarn add jest`

  #. Make a `*.spec.js` file

  #. Run `yarn jest`

Yes, it's just that easy.

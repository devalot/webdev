import { Calculator } from './constructors'

describe('Constructor Functions Exercise', () => {
  it('Should provide a Calculator function', () => {
    expect(typeof Calculator).toEqual('function')
  })

  it('Should have prototype functions', () => {
    expect(typeof Calculator.prototype.add).toEqual('function')
    expect(typeof Calculator.prototype.mul).toEqual('function')
    expect(typeof Calculator.prototype.get).toEqual('function')
  })

  it('Should default the initial value to zero', () => {
    const c1 = new Calculator(10)
    expect(c1.get()).toEqual(10)

    const c2 = new Calculator()
    expect(c2.get()).toEqual(0)
  })

  it('Should add and multiply numbers', () => {
    const c = new Calculator(10)

    c.push(5)
    c.add()
    expect(c.get()).toEqual(15)

    c.push(2)
    c.mul()
    expect(c.get()).toEqual(30)
  })

  it('Should support unique objects', () => {
    const c1 = new Calculator(10)
    const c2 = new Calculator(5)

    c1.push(2)
    c1.add()
    expect(c1.get()).toEqual(12)

    c2.push(1)
    c2.add()
    expect(c2.get()).toEqual(6)
  })

  it('Should be able to run example code', () => {
    const c = new Calculator(5)
    c.push(5)
    c.push(10)
    c.add()
    expect(c.get()).toEqual(20)
  })
})

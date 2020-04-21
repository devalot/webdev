/**
 * The function below should return an object with two
 * properties:
 *
 *   setTemp: A function that takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *            This function should *not* allow the temperature to go
 *            above 100 or below 0.
 *
 *            Store the current temperature in a closure variable.
 *
 *   getTemp: A function that returns the last temperature set by
 *            the setTemp function.
 */
function tempTracker() {
  // Your code here.
}

describe('Closures: Private variables', () => {
  it('Should return an object with two properties', () => {
    const tracker = tempTracker()
    expect(typeof tracker.getTemp).toBeDefined('function')
    expect(typeof tracker.setTemp).toBeDefined('function')
  })

  it('Should support temperature adjustment', () => {
    const tracker = tempTracker()
    tracker.setTemp(42)
    expect(tracker.getTemp()).toEqual(42)

    tracker.setTemp(0)
    expect(tracker.getTemp()).toEqual(0)
  })

  it('Should keep temperature in allowed range', () => {
    const tracker = tempTracker()
    tracker.setTemp(50)

    tracker.setTemp(101)
    expect(tracker.getTemp()).toEqual(50)

    tracker.setTemp(-1)
    expect(tracker.getTemp()).toEqual(50)
  })

  it('Should use a unique closure', () => {
    const trackerA = tempTracker()
    const trackerB = tempTracker()

    trackerA.setTemp(42)
    trackerB.setTemp(43)

    expect(trackerA.getTemp()).toEqual(42)
    expect(trackerB.getTemp()).toEqual(43)
  })
})

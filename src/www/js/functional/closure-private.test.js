/**
 * The function below should return an object with two
 * properties:
 *
 *   setTemp: A function that takes a single argument and sets the
 *            current temperature to the value of the argument.
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
  it('Should support temperature adjustment', () => {
    const tracker = tempTracker()
    tracker.setTemp(42)
    expect(tracker.getTemp()).toEqual(42)
  })

  it('should not be accessible on the object', () => {
    const tracker = tempTracker()
    expect(Object.keys(tracker)).toEqual(expect.arrayContaining(['getTemp', 'setTemp']))
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

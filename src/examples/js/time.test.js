// <<: setup
const delay = (ms, fn) => {
  setTimeout(fn, ms)
}
// :>>

// <<: infinite-timers
const delayInterval = (ms, fn) => {
  setInterval(fn, ms)
}
// :>>

// <<: all
jest.useFakeTimers()

it('should all timers', () => {
  const mock = jest.fn()
  delay(1000, mock)
  jest.runAllTimers()
  expect(mock).toHaveBeenCalled()
})
// :>>

// <<: pending
it('should run pending timers', () => {
  const mock = jest.fn()
  delayInterval(1000, mock)
  jest.runOnlyPendingTimers()
  expect(mock).toHaveBeenCalled()
})
// :>>

// <<: advance-time
it('should advance time', () => {
  const mock = jest.fn()
  delay(1000, mock)
  jest.advanceTimersByTime(999)
  expect(mock).not.toHaveBeenCalled()
  jest.advanceTimersByTime(1)
  expect(mock).toHaveBeenCalled()
})
// :>>

// <<: safer-setup
export const setupForFakeTimers = () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  return () => jest.useFakeTimers()
}
// :>>

// <<: safer-setup-use
describe('sometimes faking timers', () => {
  const useFakeTimers = setupForFakeTimers()

  it('normally has real timers', () => {
    // jest.runAllTimers() <-- does not work
  })

  it('should have a fake timer', () => {
    useFakeTimers()
    jest.runOnlyPendingTimers()
  })
})
// :>>

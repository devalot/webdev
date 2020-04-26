/**
 * Create a class `TempTracker`
 *
 * It has two methods:
 *
 *   setTemp: takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *   getTemp: returns the last temperature set by
 *            the setTemp function.
 *
 */

export class TempTracker {
  constructor() {
    this.temp = 0
  }

  getTemp() {
    return this.temp
  }

  setTemp(v) {
    this.temp = v
  }
}

/**
 * Create a class `AverageTempTracker`
 *
 * Offers the same functionality as `TempTracker`
 *
 * Additionally, it implements:
 *
 *   getAverageTemp: returns the average of temps that
 *                   have been set
 *
 */

export class AverageTempTracker extends TempTracker {
  constructor() {
    super()
    this.temps = []
  }

  setTemp(v) {
    super.setTemp(v)
    this.temps.push(v)
  }

  getAverageTemp() {
    return this.temps.reduce((acc, n) => acc + n) / this.temps.length
  }
}

/**
 * Create a class `BoundedTempTracker`
 *
 * Implements functionality of `TempTracker`
 *
 * Additionally, it implements:
 *      setTemp: same as before, but it does not set the temp
 *               if it is greater than 100 or less than 0.
 *
 *      getTemp: same as before, but it tracks each time
 *               getTemp has been called
 *
 *      getTempReads: returns how many times `getTemp` has
 *                    been called
 *
 */

export class BoundedTempTracker extends TempTracker {
  constructor() {
    super()
    this.reads = 0
  }

  setTemp(v) {
    if (v < 0 || v > 100) return
    super.setTemp(v)
  }

  getTemp() {
    this.reads += 1
    return super.getTemp()
  }

  getTempReads() {
    return this.reads
  }
}

export class Counter {
  #counter = 1

  tick() {
    return this.#counter++
  }
}

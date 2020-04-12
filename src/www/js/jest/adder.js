export class WeirdAdder {
  oddSums = []

  add(x, y) {
    let sum = x + y

    if (isOdd(sum)) {
      return this.foundOdd(sum)
    }

    return sum
  }

  getOddSumsCount() { return this._getOddSums().length }

  _isOdd(value) { return sum % 2 === 1 }

  _getOddSums() { return this.oddSums }

  _foundOdd(n) {
    console.log(`${n} is odd`)
    return n
  }
}

export class WeirdAdder {
  add(x, y) {
    let sum = x + y;

    // If odd:
    if (sum % 2 !== 0) {
      return this.foundOdd(sum);
    }

    return sum;
  }

  foundOdd(n) {
    console.log(`${n} is odd`);
    return n;
  }
}

// <<: ord
interface Ord {
  cmp(other: Ord): number;
}

function sort<T extends Ord>(xs: Array<T>): void {
  xs.sort((a, b) => a.cmp(b));
}
// :>>

class Int implements Ord {
  constructor(public n: number) {}

  cmp(other: Int): number {
    if (this.n === other.n)    return 0;
    else if (this.n < other.n) return -1;
    else                       return  1;
  }
}

let xs: Array<Int> = [];
xs.push(new Int(2));
xs.push(new Int(1));

sort(xs);
console.log(xs);
console.assert(xs[0].n === 1);

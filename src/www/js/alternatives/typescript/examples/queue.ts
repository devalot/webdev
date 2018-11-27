// <<: queue
class Queue<T> {
  private entries: Array<T> = [];
  push(e: T) { this.entries.push(e);        }
  pop()      { return this.entries.shift(); }
}
// :>>

let q = new Queue();
q.push(1);
q.push(2);
console.assert(q.pop() === 1);
console.assert(q.pop() === 2);

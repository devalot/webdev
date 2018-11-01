// <<: add
function add(x: number, y: number): number {
  return x + y;
}
// :>>

/*
function test() {
  // <<: sum
  // Works!
  const sum = add(1, 2);
  // :>>

  // <<: str
  // error: Argument of type '"1"' is not assignable
  // to parameter of type 'number'.
  add("1", "2");
  // :>>

  // <<: length
  // error: Property 'length' does not exist
  // on type 'number'.
  console.log(sum.length);
  // :>>
}
*/

export { add };

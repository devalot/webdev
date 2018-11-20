// <<: simple
function logAsString(msg: number | string): void {
  if (typeof msg === "number") {
    console.log(`msg is a number: ${msg}`);
  } else {
    console.log(`msg is a string: ${msg}`);
  }
}
// :>>

// <<: tags
interface EQ {kind: "eq"}
interface LT {kind: "lt"}
interface GT {kind: "gt"}

type Compare2 = EQ | LT | GT;
// :>>

// <<: compare2
function compare2(a: number, b: number): Compare2 {
  if (a === b)    return {kind: "eq"};
  else if (a < b) return {kind: "lt"};
  else            return {kind: "gt"};
}
// :>>

// <<: sort2
function sort2(ns: Array<number>): void {
  ns.sort((a: number, b: number): number => {
    switch (compare2(a, b).kind) {
      case "eq": return  0;
      case "lt": return -1;
      case "gt": return  1;
    }
  });
}
// :>>

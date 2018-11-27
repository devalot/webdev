// <<: compareE
enum Compare {
  EQ,
  LT,
  GT,
}
// :>>

// <<: compareF
function compare(a: number, b: number): Compare {
  if (a === b)    return Compare.EQ;
  else if (a < b) return Compare.LT;
  else            return Compare.GT;
}
// :>>

// <<: sortNums
function sortNums(ns: Array<number>): void {
  ns.sort((a: number, b: number): number => {
    switch (compare(a, b)) {
      case Compare.EQ: return  0;
      case Compare.LT: return -1;
      case Compare.GT: return  1;
      default:         return  0;
    }
  });
}
// :>>

// <<: logCompare
function logCompare(c: Compare): void {
  console.log(c);
}

// Works!  WTF?
logCompare(15);
// :>>

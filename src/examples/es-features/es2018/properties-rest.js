// <<: rest
let x = {a: 1, b: 2, c: 3, d: 4};
let {a, b, ...z} = x;
// :>>

console.log("a; //", a);
console.log("b; //", b);
console.log("z; //", z);

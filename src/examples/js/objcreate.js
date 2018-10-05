/******************************************************************************/
// <<: create
let a = {color: "red", speed: 100};
let b = Object.create(a);
let c = Object.create(b);
// :>>

console.log("c.speed; //", c.speed);

/******************************************************************************/
// <<: create
var a = {color: "red", speed: 100};
var b = Object.create(a);
var c = Object.create(b);
// :>>

console.log("c.speed; //", c.speed);

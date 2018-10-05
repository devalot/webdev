/******************************************************************************/
// <<: mixin
Function.prototype.mixin = function() {
  for (let i=0; i<arguments.length; ++i) {
    for (let prop in arguments[i].prototype) {
      this.prototype[prop] =
        arguments[i].prototype[prop];
    }
  }
};
// :>>

/******************************************************************************/
// <<: usage
let A = function() {};
A.prototype.isA = function() {return true};

let B = function() {};
B.prototype.isB = function() {return true};

let C = function() {};
C.prototype.isC = function() {return true};

C.mixin(A, B);
let obj = new C();

console.log(obj.isA()); // true
console.log(obj.isB()); // true
console.log(obj.isC()); // true
// :>>

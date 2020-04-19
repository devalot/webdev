// <<: deco
function final(descriptor) {
  let { kind } = descriptor;
  console.assert(kind === "class");

  function finisher(klass) {
    Object.freeze(klass);
    Object.freeze(klass.prototype);
  }

  return { ...descriptor, finisher };
}
// :>>

// <<: class
@final
class Hello {
  say() { console.log("Hello!") };
}
// :>>

console.assert(Object.isFrozen(Hello));

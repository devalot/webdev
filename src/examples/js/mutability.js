const x = {color: "purple", shape: "round"};

function mutator(someObject) {
  delete someObject.shape;
}

mutator(x);
console.log(x);

let x = new Array(1, 2, 3);

// Is like:

let y = Object.create(Array.prototype);
y = Array.call(y, 1, 2, 3) || y;

// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Inside the anonymous function below, write the necessary code so
// that clicking any "Click Me" element will increment its paired
// counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.


// Your code here.
var Counter = function(node) {
  this.element = node;
};

Counter.makeGlobalCounter = function() {
  var h1 = document.createElement("H1");
  h1.textContent = "Global Counter: ";

  var num = document.createElement("SPAN");
  num.textContent = "0";
  
  h1.appendChild(num);
  document.body.insertBefore(h1, document.body.firstChild);

  return new Counter(num);
};

Counter.prototype = {
  // Get the counter's current value.
  get: function() {
    return parseInt(this.element.textContent) || 0;
  },

  // Increment the counter.
  inc: function() {
    this.element.textContent = this.get() + 1;
  }
};

var global = Counter.makeGlobalCounter();

document.body.addEventListener("click", function(event) {
  if (event.target.textContent !== "Click Me") return;

  var counter = new Counter(event.target.nextElementSibling);
  counter.inc();
  global.inc();
  
  event.preventDefault();
});

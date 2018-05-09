// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Below, write the necessary code so that clicking any "Click Me"
// element will increment its paired counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.


// Your code here.
function Counter(element) {
  this.element = element;
}

// Get the value of the counter:
Counter.prototype.value = function() {
  return parseInt(this.element.textContent) || 0;
};

// Increment the value of the counter:
Counter.prototype.inc = function() {
  this.element.textContent = this.value() + 1;
};

// Listen for click events on the body:
document.body.addEventListener("click", function(e) {
  // Only deal with clicks on things that look like counters:
  if (e.target.textContent !== "Click Me") return;

  // Make sure the browser doesn't deal with the click itself:
  e.preventDefault();

  // The counter is stored in a <SPAN> just after "Click Me":
  var span = e.target.nextElementSibling;

  // Create a counter object and increment the counter.
  var counter = new Counter(span);
  counter.inc();
});

const { fromEvent } = rxjs;
const { scan, throttleTime } = rxjs.operators;

// <<: observable
function countClicks(element) {
  return fromEvent(element, "click")
    .pipe(
      // Limit to two clicks per second:
      throttleTime(500),

      // A running counter of clicks:
      scan(n => n + 1, 0)
    );
}
// :>>

// <<: subscribe
const button = document.querySelector("button");
const span   = button.parentNode.querySelector("span");

// `countClicks' is a function that returns an observable:
countClicks(button)
  .subscribe(n => span.textContent = n);
// :>>

// See:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
//
// http://www.ecma-international.org/publications/standards/Ecma-402.htm

// Numbers and currency:
let n = 123456.78;

let formatted = new Intl.NumberFormat().format(n);
console.log(formatted);

let currency = new Intl.NumberFormat('en-US', {
  style: "currency",
  currency: "USD",
}).format(n);

console.log(currency);

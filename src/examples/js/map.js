// <<: simple
let strings = [
  "Mon, 14 Aug 2006 02:34:56 GMT",
  "Thu, 05 Jul 2018 22:09:06 GMT"
];

let dates = strings.map(function(s) {
  return new Date(s);
});

dates; // [Date, Date]
// :>>

console.log(dates);
console.assert(dates.every(d => d instanceof Date));

// <<: break
for (let i=1; i<100; ++i) {
  if (i % 2 === 0) break;
  console.log(i);
}
// prints 1
// :>>

// <<: continue
for (let i=1; i<100; ++i) {
  if (i % 2 === 0) continue;
  console.log(i);
}
// prints 1, 3, 5, 7, etc.
// :>>

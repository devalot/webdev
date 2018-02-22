function filter(array, func) {
  return array.reduce(function(acc, elm) {
    if (func(elm)) acc.push(elm);
    return acc;
  }, []);
}

console.log(filter([1, 2, 3], function(e){
  return e > 1;
}));

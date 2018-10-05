// This is not pure!
// <<: cache
let checkUserPermission = function(code, roles, cache) {
  if (cache.includes(code)) {
    return true;
  } else if (Object.values(roles).includes(code)) {
    cache.push(code);
    return true;
  }

  return false;
};

let cache = [];
let roles = {view: 1, edit: 2, remove: 3};

if (checkUserPermission(3, roles, cache)) {
  console.log("user can remove page");
}
// :>>

console.log(cache);


// Tricky!
// <<: helper
let emailMatches = function(email, f) {
  return f(email.subject) || f(email.body);
};

let email = {subject: "Foo", body: "Bar"};

bool = emailMatches(email, function(str) {
  return str.match(/oo/);
});
// :>>
console.log(bool);
console.assert(bool);

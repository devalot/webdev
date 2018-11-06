/****************************************************************************/
// Array Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/****************************************************************************/
// TEST DATA:
let users = [
  {id: 1, username: "caiva", age: 30},
  {id: 2, username: "ahxae", age: 17},
  {id: 3, username: "i4tie", age: 42},
  {id: 4, username: "bvu7F", age: 19},
];

/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an array of users from the TEST
// DATA above that only includes users under the age of 18.
function exercise1() {
  return users.filter(u => u.age < 18);
}

/****************************************************************************/
// EXERCISE 2:
//
// The function below should return an array of strings.  The strings
// should be all of the usernames from the TEST DATA above, in the
// same order.
function exercise2() {
  return users.map(u => u.username);
}

/****************************************************************************/
// (BONUS) EXERCISE 3:
//
// The function below should return an array of strings.  The strings
// should be all of the numeric IDs (converted into a string via the
// `toString()` method) from the TEST DATA above where the user is
// over the age of 20 and younger than 40.
function exercise3() {
  return users
    .filter(u => u.age > 20 && u.age < 40)
    .map(u => u.id.toString());
}

/****************************************************************************/
// (BONUS) EXERCISE 4:
//
// The function below should return the `users' array from above (TEST
// DATA) in reverse order.  Do not use the built-in reverse function.
function exercise4() {
  return users.reduce(function(acc, user) {
    acc.unshift(user);
    return acc;
  }, []);
}

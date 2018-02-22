"use strict";

(function () {

  var users = [{ id: 1, username: "caiva", age: 30 }, { id: 2, username: "ahxae", age: 17 }, { id: 3, username: "i4tie", age: 42 }, { id: 4, username: "bvu7F", age: 19 }];

  // Print out usernames.
  console.log(users.map(function (u) {
    return u.username;
  }));

  // Filter out minors.
  console.log(users.filter(function (u) {
    return u.age > 18;
  }));

  // Using forEach:
  users.forEach(function (u) {
    console.log(u.id);
  });

  function test() {
    var _arguments = arguments,
        _this = this;

    var a = [1, 2, 3];

    a.map(function (e) {
      console.log(_arguments, _this);
      return e + 1;
    });
  }
})();
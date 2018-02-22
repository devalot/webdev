$(function() {
  new Confirm(function(test) {
    test.assertValues([
      // EXERCISE 1:
      test.assertFunction(Exercise1, [], function(users) {
        console.log("exercise 1 function returned: ", users);
        test.assertInstanceOf(users, Array);
        test.assert(users.length === 1, "returned array should have length of one");
        test.assert(users[0].age === 17, "returned users should be under 18");
        return true;
      }),

      // EXERCISE 2:
      test.assertFunction(Exercise2, [], function(names) {
        console.log("exercise 2 function returned: ", names);

        test.assertInstanceOf(names, Array);
        test.assert(names.length === 4, "should have 4 usernames");

        test.assert(names[0] === "caiva" &&
                    names[1] === "ahxae" &&
                    names[2] === "i4tie" &&
                    names[3] === "bvu7F", "usernames should be in correct order");

        return true;
      }),

      // EXERCISE 3: (BONUS)
      test.assertFunction(Exercise3, [], function(users) {
        test.assertInstanceOf(users, Array);
        test.assert(users.length === 1, "array should contain 1 element");
        test.assertEqual("1", users[0]);
        return true;
      }),

      // EXERCISE 4: (BONUS)
      test.assertFunction(Exercise4, [], function(users) {
        test.assertInstanceOf(users, Array);
        test.assert(users.length === 4, "array should contain 4 elements");

        test.assert(users[0].id === 4 &&
                    users[1].id === 3 &&
                    users[2].id === 2 &&
                    users[3].id === 1, "elements should have been reversed");

        return true;
      }),
    ]);
  });
});

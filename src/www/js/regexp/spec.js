describe("Regular Expression Exercise", function() {
  var today = new Date().toDateString();

  [ ["today",       today + " 0"],
    ["pi",          "3.14 0"],
    ["xx pi xx",    "xx 3.14 xx 4"],
    ["xx today pi", "xx " + today + " 3.14 2"],

  ].forEach(function(e) {
    it("Should translate '" + e[0] + "' to '" + e[1] + "'", function() {
      expect(processString(e[0])).toBe(e[1]);
    });
  });
});

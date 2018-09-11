/******************************************************************************/
//
// Jasmine Docs: https://jasmine.github.io/api/3.0/matchers.html
//
/******************************************************************************/

describe("Artist model interface", function() {
  it("fetchOne should provide one artist", function(done) {
    // Some test data:
    var record = {name: "The Wombats"};

    // Pretend the server responded with the above object:
    ajaxSpy('get', record);

    // Call into the Artist model:
    Artist.fetchOne(1).then(function(artist) {
      expect(artist.name).toEqual(record.name);
      expect(artist.save).toBeDefined();
      done(); // Make sure to call `done' last.
    }).catch(function() {
      done.fail("shouldn't have failed");
    });
  });

  it("fetchAll should yield an array of artists", function(done) {
    var records = [
      {name: "Kate Boy"},
      {name: "The Presets"},
      {name: "M83"},
    ];

    // If Ajax.get is called, return a promise that yields records:
    ajaxSpy("get", records);

    Artist.fetchAll()
      .then(function(artists) {
        expect(artists.length).toBe(records.length);
        expect(artists.map(a => a.name)).toEqual(records.map(r => r.name));
        done();
      })
      .catch(function(message) {
        done.fail("unexpected error: " + message);
      });
  });

  describe("Instance methods", function() {
    describe("the save method", function() {
      it("should create a new record when no ID is present", function(done) {
        var record = {name: "Fever Ray", id: 42};
        var artist = new Artist({name: record.name});

        ajaxSpy("post", record);
        expect(artist.id).toBeUndefined();

        artist.save()
          .then(function() {
            expect(artist.id).toBe(record.id);
            done();
          })
          .catch(function(message) {
            done.fail("unexpected promise rejection: " + message);
          });
      });
    });

    describe("the destroy method", function() {
      it("should delete the ID property", function(done) {
        var artist = new Artist({name: "Bat for Lashes", id: 42});

        ajaxSpy('destroy', {});
        expect(artist.id).toBeDefined();

        artist.destroy()
          .then(function() {
            expect(artist.id).toBeUndefined();
            done();
          });
      });
    });
  });
});

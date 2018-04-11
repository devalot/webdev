/******************************************************************************/
//
// Jasmine Docs: https://jasmine.github.io/2.4/introduction.html
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

  it("fetch All should provide an array of artists", function(done) {
    var fakeRecords = [
      {id: 1, name: "Queen", formation_year: "x", website: "y"},
      {id: 2, name: "Gaga",  formation_year: "z", website: "w"},
    ];

    ajaxSpy("get", fakeRecords);

    Artist.fetchAll()
      .then(function(artists) {
        expect(artists).toEqual(fakeRecords);
        done();
      })
      .catch(function(error) {
        done.fail("didn't expect: " + error);
      });
  });

  it("should save a new record to the backend", function(done) {
    var record = {name: "INXS", id: 42};

    ajaxSpy("post", record);
    ajaxSpy("patch", null, "should be a POST");

    var artist = new Artist({name: record.name});

    artist.save()
      .then(function() {
        expect(artist.id).toBe(record.id);
        done();
      });
  });

  it("saving an existing record does a PATCH", function(done) {
    var artist = new Artist({id: 1, name: "Prince"});

    ajaxSpy("patch", {});
    ajaxSpy("post", null, "should be a PATCH");

    artist.save()
      .then(function(a) {
        expect(a).toBe(artist);
        done();
      })
      .catch(function(message) {
        done.fail(message);
      });
  });
});

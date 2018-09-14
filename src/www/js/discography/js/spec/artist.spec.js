// jshint esversion:6

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

  describe("fetchAll", function() {
    it("should yield an array of artists", function(done) {
      let records = [
        {name: "Kate Boy"},
        {name: "Phantogram"},
        {name: "A Tribe Called Quest"}
      ];

      ajaxSpy("get", records);

      Artist.fetchAll()
        .then(function(artists) {
          expect(artists).toEqual(records);
          expect(artists.every(a => a instanceof Artist)).toBeTruthy();
          done();
        })
        .catch(e => done.fail(e));
    });
  });

  describe("Artist prototype functions", function() {
    describe("the save function", function() {
      it("should update the artist ID on create", function(done) {
        let record = {name: "The Presets", id: 42};
        let artist = new Artist({name: record.name});

        expect(artist.id).toBeUndefined();
        ajaxSpy("post", record);

        artist.save()
          .then(function() {
            expect(artist.id).toBeDefined();
            expect(artist.id).toBe(record.id);
            done();
          })
          .catch(e => done.fail(e));
      });
    });
  });
});

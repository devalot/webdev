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

  it("promise should reject", function(done) {
    ajaxSpy('get', null, "should have failed");

    Artist.fetchOne(1)
      .then(function() {
        done.fail("expected promise to reject");
      })
      .catch(function() {
        expect(true).toBe(true);
        done();
      });
  });


  describe("Artist.fetchAll", function() {
    it("should resolve to an array of artists", function(done) {
      var records = [
        {name: "Prince", id: 1},
        {name: "M83",    id: 2},
      ];

      ajaxSpy("get", records);

      Artist.fetchAll()
        .then(function(artists) {
          expect(artists.length).toBeGreaterThan(0);
          expect(artists.length).toBe(records.length);
          expect(artists).toEqual(records);
          expect(artists.every(a => a instanceof Artist)).toBeTruthy();
          done();
        })
        .catch(function() {
          done.fail("promise rejected!");
        });
    });
  });

  describe("Artist.prototype.save", function() {
    it("should pick up ID from the server", function(done) {
      var record = {id: 42, name: "The Cure"};
      var artist = new Artist({name: record.name});

      ajaxSpy('post', record);
      expect(artist.id).toBeUndefined();

      artist.save()
        .then(function(sameAsArtist) {
          expect(sameAsArtist).toBe(artist);
          expect(artist.id).toBeDefined();
          expect(artist.id).toBe(record.id);
          expect(artist.name).toBe(record.name);
          done();
        })
        .catch(function() {
          done.fail("promise failed!");
        });
    });
  });
});

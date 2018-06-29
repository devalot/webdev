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

  it("should fetch all records", function(done) {
    var records = [
      {name: "M83"},
      {name: "The Presets"},
      {name: "Soulwax"}
    ];

    ajaxSpy("get", records);

    Artist.fetchAll()
      .then(function(as) {
        expect(as.length).toBe(records.length);
        expect(as.map(a => a.name)).toEqual(records.map(r => r.name));
        expect(as.every(a => a instanceof Artist)).toBeTruthy();
        done();
      })
      .catch(function(msg) {
        done.fail("unexpected catch: " + msg);
      });
  });

  describe("prototype functions", function() {
    it("should save new records", function(done) {
      var record = {id: 42, name: "Bowie"};
      var artist = new Artist({name: record.name});
      ajaxSpy("post", record);

      artist.save()
        .then(function() {
          expect(artist.id).toBeDefined();
          expect(artist.id).toBe(record.id);
          done();
        })
        .catch(function(msg) {
          done.fail("unexpected catch: " + msg);
        });
    });

    it("should update existing records", function(done) {
      var artist = new Artist({id: 42, name: "Phantogram"});
      ajaxSpy("patch", null);

      artist.save()
        .then(function(x) {
          expect(x).toEqual(artist);
          // What else can I test?
          done();
        })
        .catch(function(msg) {
          done.fail("unexpected catch: " + msg);
        });
    });

    it("should delete existing records");
  });
});

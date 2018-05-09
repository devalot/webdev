/*jshint esversion: 6 */

/******************************************************************************/
// Artist constructor.  Given an object describing an artist, copy all
// of its local properties into `this'.
//
// This function will be called like this:
//
//  new Artist({name: "Prince", formation_year: 1970, ...});
Artist = function(fields) {
  for (var prop in fields) {
    this[prop] = fields[prop];
  }
};

/******************************************************************************/
// Should fetch a single artist via Ajax.  Return a promise that
// resolves to an instance of the Artist function.
Artist.fetchOne = function(id) {
  return Ajax.get("/api/artists/" + id)
    .then(record => new Artist(record));
};

/******************************************************************************/
// Should fetch all artists via Ajax.  Return a promise that
// resolves to an array of Artist objects.
Artist.fetchAll = function() {
  return Ajax.get("/api/artists")
    .then(as => as.map(a => new Artist(a)));
};

/******************************************************************************/
Artist.prototype = {
  // Create a new remote record if the `id' property is `undefined',
  // otherwise update an existing remote record.
  //
  // Return a promise from the Ajax library.  Don't forget to update
  // the `this' object with properties returned by the server
  // (i.e. the newly generated remote ID when creating a record).
  save: function() {
    if (this.id) {
      // Record already exists, update it:
      return Ajax.patch("/api/artists/" + this.id, this)
        .then(_ => this);
    } else {
      // New record that needs to be created in the DB.
      return Ajax.post("/api/artists", this)
        .then(record => {
          this.id = record.id;
          return this;
        });
    }
  },

  // Optional: Write a `destroy' method that deletes the artist from
  // the remote server.  Return a promise.
  destroy: function() {
    return Ajax.destroy("/api/artists/" + this.id)
      .then(_ => {
        delete this.id;
        return this;
      });
  },
};

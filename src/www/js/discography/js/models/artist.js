/******************************************************************************/
// Artist constructor.  Given an object describing an artist, copy all
// of its local properties into `this'.
//
// This function will be called like this:
//
//  new Artist({name: "Prince", formation_year: 1970, ...});
Artist = function(fields) {
  var allowed = ["id", "name", "formation_year", "website"];
  allowed.forEach(f => this[f] = fields[f]);
};

/******************************************************************************/
// Should fetch a single artist via Ajax.  Return a promise that
// resolves to an instance of the Artist function.
Artist.fetchOne = function(id) {
  return Ajax.get("/api/artists/" + id)
    .then(r => new Artist(r));
};

/******************************************************************************/
// Should fetch all artists via Ajax.  Return a promise that
// resolves to an array of Artist objects.
Artist.fetchAll = function() {
  return Ajax.get("/api/artists")
    .then(rs => rs.map(r => new Artist(r)));
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
      return Ajax.patch("/api/artists/" + id, this)
        .then(() => this);
    } else {
      return Ajax.post("/api/artists", this)
        .then(r => {
          this.id = r.id;
          return this;
        });
    }
  },

  // Optional: Write a `destroy' method that deletes the artist from
  // the remote server.  Return a promise.
  destroy: function() {
    return Ajax.destroy("/api/artists/" + this.id)
      .then(() => {
        delete this.id;
        return this;
      });
  },
};

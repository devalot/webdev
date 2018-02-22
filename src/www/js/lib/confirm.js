Confirm = function(f) {
  this.values = [];
  this.element = $("<ul></ul>").appendTo("body");
  this.currentTest = "Exercise 1";

  if (f) this.wrap(f);
};

Confirm.prototype = {
  confirm: function(value) {
    console.log("confirm called with", value);
    this.values.push(value);
  },

  assert: function(value, message) {
    if (!value) {
      this.record(false, message);
      this.abort(message);
    }
  },

  assertInstanceOf: function(value, type) {
    this.assert(value !== undefined &&
                value !== null, "expected instance of " + type.name +
                " but got undefined or null instead");

    var message = "expected instance of " + type.name + " " +
                  "but got '" + value + "' (" +
                  value.constructor.name + ") instead";

    this.assert(value.constructor == type, message);
  },

  assertEqual: function(expected, actual) {
    if (actual === undefined) actual = "undefined";

    if (expected !== actual) {
      var type_e  = typeof expected,
          type_a  = typeof actual,
          message = "expected '" + expected + "' (" + type_e +
                    ") but got '" + actual + "' (" + type_a +
                    ") instead";

      this.record(false, message);
      this.abort(message);
    }
  },

  // Returns a function that can be used with assertValues.
  assertFunction: function(f, args, callback) {
    this.confirm(f);

    return function() {
      this.assertInstanceOf(f, Function);

      var result = f.apply(null, args || []);
      if (result === undefined) return null;
      return callback.call(this, result, this);
    }.bind(this);
  },

  refute: function(value, message) {
    this.assert(!value, message);
  },

  record: function(status, message) {
    message = this.currentTest + ": " + message;
    console.log(message);

    var li = $("<li></li>").appendTo(this.element);
    li.text(message);

    if (status) {
      li.addClass("pass");
    } else {
      li.addClass("fail");
    }
  },

  abort: function(message) {
    var e = new Error(message);
    e.from_confirm = true;
    throw(e);
  },

  wrap: function(f) {
    try {
      return f(this);
    } catch (e) {
      if (! ("from_confirm" in e)) {
        var msg = e.toString() + " (check the console)";
        this.currentTest = "EXCEPTION THROWN";
        this.record(false, msg);
        throw(e);
      }
    }
  },

  assertValues: function(checks) {
    this.currentTest = "Number of calls to confirm";

    this.refute(this.values.length < checks.length, "You didn't call test.confirm enough times");
    this.refute(this.values.length > checks.length, "You called test.confirm too many times");

    for (var i=0; i < checks.length; ++i) {
      var value  = this.values[i],
          check  = checks[i],
          result = null;

      this.currentTest = "Exercise " + (i+1);

      if (check instanceof Function) {
        result = check(value, this);

        if (result === null) {
          this.record(true, "skipped");
          continue;
        }

        this.assert(result, "failed");
      } else {
        this.assert(value === check, "Should have been " + check.toString());
      }

      this.record(true, "passed");
    }
  },
};

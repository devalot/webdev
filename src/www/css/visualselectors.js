var VisualSelector = function() {
  var form = document.createElement("form");
  form.classList.add("visual-selector");

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  form.appendChild(input);

  var body = document.querySelector("body");
  body.insertBefore(form, body.firstChild);

  this.currentInput         = "";
  this.invalidSelectorClass = "invalid-selector";
  this.foundMatchesClass    = "found-matches";
  this.noMatchesClass       = "nothing-matches";
  this.highlighedClass      = "visual-selector-highlighted";
  this.singledOutClass      = "visual-selector-singled-out";

  this.form  = form;
  this.input = input;
  this.hide();

  // For Special keys.
  document.querySelector("body").
    addEventListener("keydown", this.onBodyInput.bind(this));

  // For local events.
  form.addEventListener("submit", this.onSubmit.bind(this));
  input.addEventListener("keydown", this.onInput.bind(this));
};

VisualSelector.prototype = {
  // Show the visual selector.
  show: function() {
    this.form.classList.remove("visual-selector-hidden");
    this.input.focus();
    this.isHidden = false;
  },

  // Hide the visual selector.
  hide: function() {
    this.form.classList.add("visual-selector-hidden");
    this.removeMatchHighlighting();
    this.input.value = "";
    this.isHidden = true;
  },

  // Deals with form submission.
  onSubmit: function(event) {
    event.preventDefault();
    event.stopPropagation();

    this.removeMatchHighlighting(true);
    if (this.matches.length === 0) return;
    if ((this.matchIndex + 1) >= this.matches.length) this.matchIndex = -1;

    var node = this.matches[++this.matchIndex];
    node.scrollIntoViewIfNeeded();
    node.classList.add(this.singledOutClass);
  },

  // Handle a few special keys.
  onBodyInput: function(event) {
    if (event.type === "keydown" && event.keyCode === 27 /* ESCAPE */) {
      if (this.isHidden) {
        this.show();
      } else {
        this.hide();
      }
    }
  },

  // Debounces keydown events.
  onInput: function(event) {
    // Send everything else to the highlight function.
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(this.highlight.bind(this, event), 100);
  },

  // Updates the highlighting for the elements matching the current
  // selector.
  highlight: function(event) {
    try {
      // Don't do anything if the input didn't actually change.
      if (this.input.value === this.currentInput) return;
      this.currentInput = this.input.value;

      // Remove all highlighting so far:
      this.removeMatchHighlighting();

      // Add it on to all current matches:
      this.matchIndex = -1;
      this.matches = [];

      if (!this.input.value.match(/^\s*$/)) {
        this.matches = Array.from(document.querySelectorAll(this.input.value));
      }

      if (this.matches.length > 0) {
        this.resetClassListTo(this.foundMatchesClass);

        this.matches.forEach(function(e) {
          e.classList.add(this.highlighedClass);
        }.bind(this));
      } else {
        this.resetClassListTo(this.noMatchesClass);
      }
    } catch(e) {
      /* IGNORE console.debug(e); */
      this.resetClassListTo(this.invalidSelectorClass);
    }
  },

  removeMatchHighlighting: function(keepMatches) {
    if (!keepMatches) {
      var existing = document.getElementsByClassName(this.highlighedClass);

      Array.from(existing).forEach(function(e) {
        e.classList.remove(this.highlighedClass);
      }.bind(this));
    }

    var singledOut = document.getElementsByClassName(this.singledOutClass);

    Array.from(singledOut).forEach(function(e) {
      e.classList.remove(this.singledOutClass);
    }.bind(this));
  },

  resetClassListTo: function(className) {
    var classes = [
      this.foundMatchesClass,
      this.noMatchesClass,
      this.invalidSelectorClass,
    ];

    classes.forEach(function(c) {
      if (c === className) {
        this.input.classList.add(c);
      } else {
        this.input.classList.remove(c);
      }
    }.bind(this));
  },
};

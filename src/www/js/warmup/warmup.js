/*
 * Use Case:
 *
 * 1. User clicks on the "Change" button.
 *
 * 2. If the text input is blank then nothing changes.
 *
 * 3. The contents of the <h1> element are replaced with the contents
 *    of the text input.
 *
 * 4. The text input is cleared.
 *
 * BONUS 1:
 *
 * Before step 3 above: Save the current text content of the <h1>
 * element by creating an <li> element.  Set the text content of the
 * <li> element to the text content of the <h1> element.  Find the
 * <ul> element with the ID of "history" and insert the new <li>
 * element as its first child.  Therefore, each time the <h1>
 * element is changed, its current value is prepended to the <ul>
 * element.
 *
 * BONUS 2:
 *
 * If one of the <li> elements inside the <ul> element from bonus 1
 * is clicked, update the text content of the <h1> element with the
 * text content of the clicked <li> element.
 */
var InputHistory = function(form, header, list) {
  this.form = form;
  this.header = header;
  this.list = list;
  this.input = this.form.querySelector('input[name="q"]');
  this.form.addEventListener("submit", this.onSubmit.bind(this));
  this.list.addEventListener("click", this.onListClick.bind(this));
};

InputHistory.prototype = {
  onSubmit: function(e) {
    if (this.input.value.match(/\S/)) {
      this.update(this.input.value);
      this.input.value = "";
    }
    e.preventDefault();
  },
  onListClick: function(e) {
    if (e.target.tagName !== "LI") return;
    this.update(e.target.textContent);
    this.list.removeChild(e.target);
  },
  update: function(text) {
    this.push(this.header.textContent);
    this.header.textContent = text;
  },
  push: function(text) {
    var li = document.createElement("LI");
    li.textContent = text;
    this.list.insertBefore(li, this.list.firstChild);
  }
};

var form = document.querySelector("form");
var header = document.querySelector("h1");
var list = document.getElementById("history");
new InputHistory(form, header, list);

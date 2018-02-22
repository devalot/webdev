## HTML Forms

### New `input` Types

~~~ {.html}
<input type="text">
~~~

 * `color`: Color picker
 * `date` or `datetime` or `time`: Date/time picker
 * `email`: Restrict to valid email addresses
 * `number`: Restrict to valid floating point numbers
 * `range`: Number picker via a UI slider
 * `search`: Like `text`, but browsers can stylize
 * `tel`: Telephone number (no restrictions)
 * `url`: Validated to be a URL
 * `week` or `month`: Week/month picker

### Form Validation in the Browser

Validation attributes:

  * `max`: Maximum number or date
  * `maxlength`: Maximum number of characters
  * `min`: Minimum number or date
  * `minlength`: Minimum number of characters
  * `pattern`: Regular expression `value` must match
  * `required`: Input must have a value
  * `title`: Describe the `pattern` conditions

CSS Pseudo Classes:

  * `:valid`: Element's value is valid
  * `:invalid`: Element's value is invalid
  * `:optional`: No value is required
  * `:required`: A value is required

## Attribute Selectors

### Selecting Based on Arbitrary Attributes

Writing a selector for the `id` or `class` attributes is easy.  What
about the other attributes?

~~~ {.css}
/* Attribute exists */
input[placeholder] {
  color: #eee;
}

/* Attribute has exact value */
input[type="number"] {
  border: none;
}

/* Attribute contains substring */
a[href*="salesforce.com"] {
  font-weight: bold;
}
~~~

### Available Operators

 Operator  Description         Example
 --------- ------------        ----------
 `=`       Exact match         `[type="text"]`
 `~=`      Contains word       `[class~="foo"]`
 `|=`      Prefix before dash  `[lang|="en"]`
 `^=`      Begins with         `[href^="http://"]`
 `$=`      Ends with           `[href$=".pdf"]`
 `*=`      Contains substring  `[href*="salesforce.com"]`

<div class="notes">

For more information and more complete examples, see [@W3CSel].

</div>

### Exercise: Attribute Selectors

  #. Open (and edit) the following file in your text editor:

        src/www/css/selectors/part-05.css

  #. Review (but don't edit) the following file:

        src/www/css/selectors/index.html

  #. Follow the directions in the CSS file

  #. Open the HTML file in your browser and confirm your changes

# Model-View-Controller Programming

## Introduction to MVC

### The Basic Ideas Behind MVC

  * Divide application functionality into (at least) three layers

  * Model: manages data and business logic independent of the user
    interface

  * View: Display something about the model to the user

  * Controller: Receives user input and facilitates decoupled
    communication between the view and the model

### Web Applications and MVC

  * MVC has been widely adopted and extended in the web world

  * Several JS frameworks support MVC (AngularJS, Ember.js, Backbone, etc.)

  * Modern browsers allow the entire MVC stack to exist entirely in JS

  * Typical applications use Ajax+JSON+REST and a back-end database

## Introducing the Class Project

We're going to build a simple web application that displays
discography information.

### Objectives for the Class Project

  * Simple, single page application (one HTML file)

  * Uses MVC with a back-end JSON server

  * Pure JavaScript (no frameworks)

  * Features:
    - Display a list of musical artists
    - Clicking an artist shows their albums
    - Ability to add a new artist

## Prerequisites

We're going to need a few things before we begin.

### Things We're Going to Need

  * Simple wrapper around Ajax (we'll write this ourselves)

  * Template library (we'll use [Mustache][])

  * Testing framework (we'll use [Jasmine][])

### Ajax Refresher

Making an Ajax request:

~~~ {.javascript insert="../../src/examples/js/ajax.js"}
~~~

### Exercise: A Simple Ajax Library

  #. Open `www/discography/js/lib/ajax.js`

  #. Fill in the missing pieces

  #. Run the tests:

    ~~~
    node bin/jasmine spec/ajax.spec.js
    ~~~

  #. Get the tests to pass

## Models

### What a Model Should Provide

  * Fetch all records (within reason)

  * Fetch a single record by ID

  * Create a new record and send to back end

  * Update a record and save to back end

  * Delete a record from the back end

  * Contain any business logic

### Using REST+JSON {#H30c09a3c203b11e5bf151b9a1d160fa7}

  * Fetch all artists (no body):

        GET /api/artists

  * Fetch a single artist (no body):

        GET /api/artists/2

  * Create a new record (JSON body):

        POST /api/artists

  * Update a record (JSON body):

        PATCH /api/artists/2

  * Delete a record (no body):

        DELETE /api/artists/2

### Exercise: Our First Model

  #. Open `www/discography/js/models/artist.js`

  #. Fill in the missing pieces

  #. Test with the following command:

        node bin/jasmine spec/artist.spec.js

  #. Play with the code in the browser console

### Testing with Jasmine

  * The `describe` and `it` functions

  * Expectations:

    <https://jasmine.github.io/2.4/introduction.html>

### A Word About Mocked XHR

  * Our tests use a custom Ajax spy/mocking library

  * Tell the library you want to hijack Ajax calls:

    ~~~ {.javascript}
    var artist = {name: "The Wombats"};
    ajaxSpy('get', artist);

    /* Call a function that uses the `Ajax' module. */
    ~~~

### Exercise: Adding Model Tests

  #. Open `spec/artist.spec.js`

  #. Add a test for the `fetchAll` function

  #. Add a test for the `save` function

  #. Add a test for the `destroy` function

## Views

### Objective: Displaying Artists

Let's get our list of artists into the HTML:

  * We'll display them in an HTML table

  * To do this we'll need a view library

  * And eventually, a controller to load the artists and send them to
    the view

### Cheating with the Mustache Library

The mustache library makes it easy to create view templates:

  * Given a template:

    ~~~
    Hello {{name}}
    ~~~

  * And an object:

    ~~~ {.javascript}
    {name: "World"}
    ~~~

  * Mustache produces:

    ~~~ {.javascript}
    "Hello World"
    ~~~

### Implicit Loops with the Mustache Library

  * Given a template:

    ~~~
    {{#friends}}
    <li>{{name}}</li>
    {{/friends}}
    ~~~

  * And an object:

    ~~~ {.javascript}
    { friends: [ {name: "Moss"},
                 {name: "Roy"},
               ]
    }
    ~~~

  * Mustache produces:

    ~~~ {.javascript}
    "<li>Moss</li>\n<li>Roy</li>"
    ~~~

### Putting Mustache Templates in Our HTML

We can put mustache templates directly in our HTML:

~~~ {.html}
<script id="my-template" type="x-tmpl-mustache">
Hello {{name}}!
</script>
~~~

And fetch them when needed:

~~~ {.javascript}
var obj = {name: "World"};
var tpl = document.getElementById("my-template");
var out = Mustache.render(tpl.innerHTML, obj);
~~~

<div class="notes">

For more details see the [Mustache][] library documentation.

</div>

### Exercise: Create the `View` Object

  #. Open `www/discography/js/lib/view.js`

  #. Implement the `set` function

  #. Test the `set` method in the browser console

## Controllers

### A Simple Controller

  * To glue everything together we're going to need a controller.

  * It should:
    - Fetch all artists
    - Use the `View` object to render the view

  * We'll call this the `index` action (based on Ruby on Rails)

### Exercise: Building a Simple Controller

  #. Open `www/discography/index.html`

  #. Create a mustache template for the artist index view

  #. Open `www/discography/js/controllers/artists_controller.js`

  #. Fill in the `index` function
     - Fetch all artists
     - Render the view
     - Insert the view into the `#view` div

  #. Reload the page in the browser

### Bonus Exercise

If you have time:

  #. Turn artist names into links

  #. Clicking a link should invoke the `ArtistsController.show`
     method and display a single artist

  #. Fill in the remaining functions in the `ArtistsController`

Hints:

  * On the table row, store a `data-artist-id` attribute with the ID
    of the current artist.  You can use this in the `click` event
    callback to send the ID to the `ArtistsController.show` method.

## Going Back go the Model Layer

### Abstracting Our Model Code

If we wrote another model it would look very similar to the `Artist`
model.  It would have:

  * The ability to create a new record

  * Save a record

  * Delete a record

Let's fix that.

### Exercise: Factoring Out Common Functionality

  #. Open `www/discography/js/lib/model.js`

  #. Move all common logic from `Artist` into `Model`

  #. Link the `Artist` and `Model` objects (prototype?)

### Nested REST Resources

  * Fetch all albums for artist 2 (no body):

        GET /api/artists/2/albums

  * Fetch a single album for artist 2 (no body):

        GET /api/artists/2/albums/3

  * Create a new record (JSON body):

        POST /api/artists/2/albums

  * Update a record (JSON body):

        PATCH /api/artists/2/albums/3

  * Delete a record (no body):

        DELETE /api/artists/2/albums/3

### Exercise: The Albums Model

  #. Open `www/discography/js/models/album.js`

  #. Fill in the `Album` model
     - Ensure that albums have an `artist_id` property
     - Make sure all Ajax requests go through `/api/artists/N/albums`

  #. Test in the browser console

### Exercise: The Albums Controller

  #. Open `www/discography/js/controllers/albums_controller.js`

  #. Update the controller and views so that clicking an artist will
     display a list of albums

### Exercise: Creating New Artists

  #. In the artists view, add a link for creating a new artist

  #. Clicking the link should display a form

  #. Submitting the form should save an artist to the database

  #. Then display all artists again

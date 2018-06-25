## Geolocation

### Testing If Geolocation is Enabled

~~~ {.javascript}
if ("geolocation" in navigator) {
  // ...
}
~~~

### Getting the Browser's Location

~~~ {.javascript}
navigator.geolocation.getCurrentPosition(function(pos) {
  // ...
});
~~~

### Browser Support

  - IE      >= 9
  - Firefox >= 3.5
  - Safari  >= 5
  - Chrome  >= 5
  - Opera   >= 16

<div class="notes">

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation>

</div>

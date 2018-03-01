## Canvas

### Canvas: Two Drawing APIs

  * 2D drawing primitives via paths

  * 3D drawing via WebGL

  * Both can be hardware accelerated

  * Typically 60 FPS (if animating)

### Drawing a Circle: The HTML

~~~ {.html}
<canvas id="circle"></canvas>
~~~

### Drawing a Circle: JavaScript

~~~ {.javascript}
canvas  = document.getElementById("circle");
context = canvas.getContext("2d");

var path = new Path2D();
path.arc(75, 75, 50, 0, Math.PI * 2, true);
context.stroke(path);
~~~

### Browser Support

  - IE      >= 9
  - Firefox >= 1.5
  - Safari  >= 2
  - Chrome  >= 1
  - Opera   >= 9

### Documentation

<https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial>

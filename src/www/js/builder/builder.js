/*
 * The `Builder' function takes a single argument (an object) and
 * generates (and returns) a constructor function.
 *
 * The object given to the `Builder' function has one special
 * property, the `constructor' property.  It will be a function that
 * should become a fully working JavaScript constructor function.
 *
 * The remaining properties in the object should become prototype
 * properties for the returned constructor function.
 *
 * BONUS: (if you have time)
 *
 * Change the `Builder' function so that it takes a second argument.
 * If the second argument is given, the constructor function that is
 * generated should inherit from it.
 */
function Builder(properties, parent) {
  var ctor = properties.constructor;
  delete properties.constructor;

  if (parent !== undefined) {
    // properties.__proto__ = parent.prototype;
    Object.setPrototypeOf(properties, parent.prototype);
  }

  ctor.prototype = properties;
  return ctor;
}

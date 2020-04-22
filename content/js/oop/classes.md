## Inheritance: Classes

### JS Gets `class`

* `class` keyword introduced in ES2015
* Provides syntactic sugar on *actual* JS inheritance system
* More familiar to most OOP programmers

### Getting `class`-y

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="rec"}
~~~

### Inheritance

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="sq"}
~~~

### Static Methods

Values and functions that belong to the **class**, not **instances**.

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="static"}
~~~

### Static Methods

Values and functions that belong to the **class**, not **instances**.

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="static-2"}
~~~

### Static Methods

Sometimes used to store **factories**.

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="static-factory"}
~~~

### Getters and Setters

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="get-set"}
~~~

### Instance Fields

```js
class Person {
  constructor(name) { this.name = name }
  getName = () => this.name
}

const person = new Person('Andrew')
person.getName() // 'Andrew'

const willNotLoseContext = person.getName
willNotLoseContext() // 'Andrew'
```

### Instance Fields

* Enabled via `@babel/plugin-proposal-class-properties`
* Performance implications
* Mostly used in UI frameworks e.g. React

### Instance Fields

Also lets you sometimes ditch the `constructor`:

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="instance-constructor"}
~~~

### Private Fields

Privacy used to be indicated by convention:

```javascript
class Message {
  constructor(msg) {
    this._message = msg
  }
}
```

### Private Fields

Stage 3 syntax now supports private fields:

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="private-field"}
~~~

### Private Instance Fields

You can even make private instance fields!

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="private-instance-field"}
~~~

### Exercise

  #. Open `src/www/js/oop/classes.js`

  #. Make all tests pass 

```shell
$ cd src
$ yarn jest classes.test.js --watch
```

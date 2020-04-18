## Babel: Configuration

### Configuration

**`babel.config.js`**: config file for Babel

```javascript
module.exports = {
  /* ... */
}
```

### Presets

Collection of Babel plugins for common environments

Most common ones:

  * **`@babel/preset-env`**: Transform for browser compatibility
  * **`@babel/preset-flow`**: Handle Flow type annotations
  * **`@babel/preset-react`**: Plugins for React development
  * **`@babel/preset-typescript`**: Handle TypeScript

### `preset-env`: Browser Compatibility

  * Add `@babel/preset-env`
  * Specify your browser targets for compatibility, or use defaults
  * Managed with `browserslist` configuration
    * "only last 2 major versions"
    * "no IE"
    * ">0.5% market share"

### `preset-env`: Browser Compatibility

Just the defaults

```javascript
module.exports = {
  presets: ['@babel/env']
}
```

### `preset-env`: Browser Compatibility

More specific:

```javascript
[
  '@babel/env',
  {
    targets: '>0.25%, safari >= 8, not ie 11',
  },
]
```

### `preset-env`: Handling Polyfills

Three options for `useBuiltIns`:

```javascript
{
  targets: '...',
  useBuiltIns: 'entry' | 'usage' | false,
},
```

### `preset-env`: Handling Polyfills

`entry`:
  : Add polyfills to entry file, Babel pulls out those actually needed

`usage`:
  : Babel adds polyfills in files where they're needed (RECOMMENDED)

false:
  : Don't add polyfills automatically

### `preset-env`: Handling Modules

**`modules`**: allows you to change how modules are transformed:

  * `commonjs`, `amd`, `umd`, etc...

RECOMMENDED: `false`

Don't transform; Webpack will take care of it for you

### Other Handy Plugins

In addition to `preset-env` I use:

  * `preset-react`
    * Transforms React
  * `preset-flow` (we use Flow)
    * Write Flow
  * `plugin-proposal-class-properties`
    * Class properties
  * `plugin-proposal-object-rest-spread`
    * Object rest / spread syntax: `{ ...obj }`
  * `plugin-syntax-dynamic-import`
    * Dynamic imports: `() => import('./file')`

### Other Plugins

Many plugins to allow experimental syntax from TC39 proposals:

  * Do expressions
  * Decorators
  * Nullish coalescing operating
  * Pipeline operator
  * Private methods
  * etc.

Plugins let you play with the latest JS syntax experiments.

Some of them are **really cool**.

Also, **this is risky.** Some proposals may never land in the JS spec.

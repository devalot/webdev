### Starting Over

`rm -rf node_modules && yarn`

### Upgrading Packages

Two approaches to upgrade within semver ranges:

  * **ALL THE THINGS**: `yarn upgrade`

  * **Selective**: `yarn upgrade ...`

  * **Interactive**: `yarn upgrade-interactive`

### Upgrading Packages

Upgrading packages outside semver ranges:

  * `yarn upgrade --latest`

  * `yarn upgrade-interactive --latest`

  * Update semver number in `package.json`

  * Flip the table: `rm yarn.lock && yarn`

### Upgrading Transitive Dependencies

  * Go to entry in `yarn.lock` and delete it

  * `yarn`

### Running Things

  * Run with `yarn [script|binary]`

  * **`scripts`**: write CLI commands in `package.json`

  * Package binaries (e.g. `babel`, `jest`)

### Running Things

In `package.json`:

```json
"scripts": {
  "say-hello": "echo 'Hello world'",
},
```

Then in terminal:

```shell
$ yarn say-hello

yarn run v1.22.4
$ echo 'Hello world'
Hello world
Done in 0.07s.
```

### Local Development w/ Dependencies

  * Say your project depends on a package you also change a lot

  * What happens when you need changes?

  * Or you're debugging an issue with the package that manifests in your project

### Local Development w/ Dependencies

  * You could go into `node_modules/...` and write in there

  * What are some dangers with this approach?

### Local Development w/ Dependencies

  * Better: "link" the package

  * `yarn link`: make this package linkable in other projects

  * `yarn link [package]`: link in the package you want to use for the current project

### Local Development w/ Dependencies

Say you had an issue with `react`, assuming it's a sibling of your project:

```shell
$ cd react
$ yarn link # makes this package available for linking

$ cd ../my-project
$ yarn link react # link in the package
```

### Clearing the Cache

  * Yarn caches downloaded packages for faster installs

  * Clear it with `yarn cache`

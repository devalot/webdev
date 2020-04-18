# WebDev: Web Development Course

This is the source code and training content for the Web
Development course taught by [Andrew Smith](https://github.com/andrewsouthpaw/).

## Setup

We're going to walk through installation of the following:

- nvm
- Node.js
- yarn

### `nvm`

You can install a single version of Node.js, but the more common practice is to install `nvm` (Node Version Manager), which allows you manage multiple versions of node on the same system.

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

Running this command downloads and runs the script in your shell.

Note the output: `nvm` will automatically update one of your profile files in your home directory (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`, it tries to make a reasonable guess).
 
Open a fresh shell and verify you can access `nvm` now:

```shell
$ nvm --version
0.35.1

$ echo $NVM_DIR
/some/path/to/.nvm
```

(In case you're curious and noticed it, `$ which nvm` doesn't work because `nvm` is a function sourced from a shell script and is not an executable binary.)

### Node.js

Now you can download a recent version of Node.js. As of this writing, it's `12.13.0` (Erbium). Node.js goes through lots of iterations, but it releases Long-Term Support (LTS) versions that are promised to be stable and maintained for a long time. The easiest way to get a version:

```shell
$ nvm install 12

or...

$ nvm install lts/erbium
``` 

Use `$ nvm ls` to look at all the LTS Node.js versions.

### `npm`

It comes with your Node.js install. Verify the installation with:

```bash
$ npm --version
```

**NB: Avoid `sudo` with `npm`**: If you ever install packages with `npm` and you are prompted to use `sudo`, something has gone wrong. Don't do it, as it will all end in tears and your system can get very messed up.

### `yarn`

`npm` is nice and all, but `yarn` (a competitor to `npm`) is better.

```bash
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

## Running

Install our webdev dependencies:

```shell
$ cd src
$ yarn
$ yarn start
```

Then visit <http://localhost:3000>

## Building the Course Content (PDF Files)

1. Start with Linux, as macOS has incompatibility issues

1. Install the [Nix Package Manager](https://nixos.org/nix/) (`>=`
   2.0 is required)

1. Load into your shell: `  . /home/andrew/.nix-profile/etc/profile.d/nix.sh`

1. Run the following command: `nix build`

The generated PDF files will be in the `result` directory.

[pjones]: http://www.devalot.com/about/pjones.html

Maybe later: figure out how to [get it to build on macOS](https://www.softinio.com/post/moving-from-homebrew-to-nix-package-manager/).

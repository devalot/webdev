# WebDev: Web Development Course

This is the source code and training content for the Web
Development course taught by [Peter J. Jones][pjones].

## Prerequisites

This collection of exercises and demos needs [Node.js][] installed to
work correctly.

## Bootstrapping

If you cloned this repository from GitHub you'll need to bootstrap it.
From the command line, and within the `src` directory, bootstrap by
running the following command:

    npm install

## Starting Things Up

  1. From the command line, and in the `src` directory, run the following
     command:

         node bin/server.js

  2. Open the following URL in your browser of choice:

     <http://localhost:3000/>

[pjones]: http://www.devalot.com/about/pjones.html
[node.js]: https://nodejs.org/


## Building the Course Content (PDF Files)

  1. Install the [Nix Package Manager](https://nixos.org/nix/)

  2. Run the following command:

         nix-build

The generated PDF files will be in the `result/docs` directory.

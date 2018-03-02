WebDev: Web Development Course
==============================

This is the source code and training content for the Web
Development course taught by [Peter J. Jones][pjones].

The official site for this course is
<https://github.com/devalot/webdev>

Prerequisites
-------------

This collection of exercises and demos needs [Node.js][] `>=` 8
installed to work correctly.

Starting Things Up
------------------

  1. Look in the `start-scripts` folder for a file matching your
     operating system:

       - macOS: Double-click the `macos.command` file

       - Windows: (cmd file coming soon)

       - Linux/*BSD: Open a term and use `linux.sh`

  2. Open the following URL in your browser of choice:

     <http://localhost:3000/>


Building the Course Content (PDF Files)
---------------------------------------

  1. Install the [Nix Package Manager](https://nixos.org/nix/) (`>=`
     2.0 is required)

  2. Run the following command:

         nix build

The generated PDF files will be in the `result` directory.

[pjones]: http://www.devalot.com/about/pjones.html
[node.js]: https://nodejs.org/

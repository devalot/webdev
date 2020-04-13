WebDev: Web Development Course
==============================

This is the source code and training content for the Web
Development course taught by [Andrew Smith](https://github.com/andrewsouthpaw/).

The official site for this course is
<https://github.com/devalot/webdev>

Prerequisites
-------------

- [NodeJS](https://nodejs.org/)
- [npm](http://npmjs.com/)
- [yarn](https://classic.yarnpkg.com/)

Starting Things Up
------------------

  1. Look in the `start-scripts` folder for a file matching your
     operating system:

    `cd src && yarn`

       - Windows: Double-click the `windows.cmd` file

    `yarn start`

  2. Open the following URL in your browser of choice:

     <http://localhost:3000/>


Building the Course Content (PDF Files)
---------------------------------------

1. Start with Linux, as macOS has incompatibility issues

1. Install the [Nix Package Manager](https://nixos.org/nix/) (`>=`
   2.0 is required)

1. Load into your shell: `  . /home/andrew/.nix-profile/etc/profile.d/nix.sh`

1. Run the following command: `nix build`

The generated PDF files will be in the `result` directory.

[pjones]: http://www.devalot.com/about/pjones.html

Maybe later: figure out how to [get it to build on macOS](https://www.softinio.com/post/moving-from-homebrew-to-nix-package-manager/).

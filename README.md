Lunch retro [Wednesday](https://drive.google.com/open?id=1kD9PxUSdisdlqf-Gzhi3e9qgLdiZd3FuZUGtlPZGLl4)
Morning retro [Thursday](https://forms.gle/5ChMHpUt5MpXqdWu5)

WebDev: Web Development Course
==============================

This is the source code and training content for the Web
Development course taught by [Andrew Smith](https://github.com/andrewsouthpaw/).

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

       - Windows: Double-click the `windows.cmd` file

       - Linux/*BSD: Open a term and use `linux.sh`

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
[node.js]: https://nodejs.org/

Maybe later: figure out how to [get it to build on macOS](https://www.softinio.com/post/moving-from-homebrew-to-nix-package-manager/).

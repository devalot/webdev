let
  # All dependencies come from this package source:
  pinned = {
    owner  = "NixOS";
    repo   = "nixpkgs-channels";

    # NixOS 17.09 (stable) as of 1/30/2018:
    rev    = "c2b668ee7264000b10d554754150ea9305b6ef3d";
    sha256 = "1nqjsl163dahghidh06k3ynzq6kkmb9pzj1njw6ilfx7axygkyx8";
  };

  # Which version of Edify to use:
  edifyRepo = {
    url    = "git://git.devalot.com/edify.git";
    rev    = "a5a9b01a339fcb20440189063e114fc3a76c1892";
    sha256 = "067j09lfl0zmc1hmc9m0pr45n0j5614mzqm3km478c8h6zldp9br";
  };

  # Load the host's nixpkgs, then the pinned version:
  hostPkgs   = import <nixpkgs> {};
  pinnedPkgs = import (hostPkgs.fetchFromGitHub pinned) {};

  # Fetch edify from another repository:
  edifyDrv = import "${pinnedPkgs.fetchgit edifyRepo}/edify.nix";
  edifyPkg = pinnedPkgs.haskellPackages.callPackage edifyDrv {};

in { pkgs = pinnedPkgs;
     edify = edifyPkg;
   }

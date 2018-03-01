let
  # All dependencies come from this package source:
  pinned = {
    owner  = "NixOS";
    repo   = "nixpkgs-channels";

    # NixOS 17.09 (stable) as of 1/30/2018:
    rev    = "c2b668ee7264000b10d554754150ea9305b6ef3d";
    sha256 = "1nqjsl163dahghidh06k3ynzq6kkmb9pzj1njw6ilfx7axygkyx8";
  };

  # Which version of Edify to use.
  edifyRepo = {
    url    = "git://git.devalot.com/edify.git";
    rev    = "053d5b74ebca25e572be6726bda538071c348c8c";
    sha256 = "1biv8gqgmyiap38xxvzb2vwchagg82h45i73df66w69dmrg78q4d";
  };

  # Load the host's nixpkgs, then the pinned version.
  hostPkgs   = import <nixpkgs> {};
  pinnedPkgs = import (hostPkgs.fetchFromGitHub pinned) {};

  # Fetch edify from another repository:
  edifyDrv = import "${pinnedPkgs.fetchgit edifyRepo}/edify.nix";
  edifyPkg = pinnedPkgs.haskellPackages.callPackage edifyDrv {};
in
{ pkgs    ? pinnedPkgs
, profile ? false
}:

pkgs.stdenv.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.1.0";
  src = ./.;

  # Specifically don't want fixups for this package:
  phases = [ "unpackPhase" "buildPhase" "installPhase" ];

  # Additional system dependencies:
  buildInputs = with pkgs; [
    inkscape # For SVG -> PDF
    graphviz_2_32 # For DOT -> PDF

    # Markdown -> PDF
    edifyPkg
    pandoc
    haskellPackages.pandoc-citeproc
    haskellPackages.pandoc-crossref

    # TeX:
    (texlive.combine {
      inherit (texlive) scheme-small collection-binextra beamer;
    })
  ];

  buildPhase = ''
    edify build --top "$(pwd)" courses/*.md
  '';

  installPhase = ''
    mkdir -p $out/docs
    cp -rp LICENSE README.md src $out/
    find build/courses -type f -name '*.pdf' -exec cp '{}' $out/docs ';'
  '';
}

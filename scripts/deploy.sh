#!/bin/sh

################################################################################
set -e
set -u

################################################################################
ssh_host="ursula.pmade.com"
ssh_dir="/var/lib/websites/devalot.com/shared/files/webdev"

################################################################################
if [ $# -ne 1 ] || [ ! -e "$1" ]; then
  >&2 echo "give the name of a zip file to upload"
  exit
fi

################################################################################
short_name=$(basename "$ssh_dir").zip
long_name=$(basename "$1")

################################################################################
scp "$1" "${ssh_host}:${ssh_dir}"
ssh "$ssh_host" "cd $ssh_dir && ln -nfs $long_name $short_name"

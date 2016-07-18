GDILiveCD
=========

This repository contains the configuration
files and documentation for a Live CD
that contains all the tools used in the
Computer Science Course for electrical engineering
students at the University of Bremen.

Dependencies
------------

To generate a Live CD iso you need
a running and up to date Debian based operating
system with the live-build package installed.

    $ sudo apt install live-build


Downloading
-----------

Live-build has internal support for bootstrapping
a configuration from a git repository.
To clone and initialize the configuration you
have to execute the collowing command in an empty
directory.

    $ lb config --config https://github.com/hnez/GDILiveCD


Building
--------

Live-build needs root permissions to build a Live Iso.
Executing the following command will download all
software packages configured and create an iso file.

    $ sudo lb build


Documentation
-------------

The documentation folder contains some hints on how
to use the generated iso in a virtual machine.

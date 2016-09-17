Intro:
======
This is a bare-bones electron app that uses jQuery and Twitter's Bootstrap for
styling without any other extraneous modules.  The only node_modules
dependences are: bootstrap, jquery, and tether.  

This repo with npm globally installed electron is ~ 7mb in size when cloned
and creates a dummy app with this startup screen:

![Alt text](Screenshot.jpeg?raw=true "Screen shot")

Clicking the button use nodejs services to alter the text above the button to
show the current OS's type.

Prerequisites:
==============
* nodejs is required https://nodejs.org/en/download/
* Prebuilt Electron ```npm install -g electron```

If you are on a corporate proxy there are various `npm config set` options to
tweek in order to download npm modules.

For the first time setup:
=========================
Issue the following commands after having the prerequisites:
* ```git clone https://github.com/dkelosky/electron-jquery-bootstrap.git```
* ```cd electron-jquery-bootstrap```
* ```npm install```
* ```electron .```

After first setup:
==================
After closing the app for the first time, it can be restarted via ```electron .```

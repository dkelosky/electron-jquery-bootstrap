Intro:
======
There do not appear to be many, easily found, basic, bare-bones, electron apps without many extraneous modules to demo an app
with jQuery usage and Bootstrap styling.  

This repo with npm globally installed electron is < 5mb in size when cloned and creates a dummy app with this startup screen:

![Alt text](Screenshot.jpeg?raw=true "Screen shot")

Clicking the button use nodejs services to alter the text above the button to show the current OS's type.

Prerequisites:
==============
* nodejs is required (https://nodejs.org/en/download/)
* Prebuilt Electron (technically other ways to do this)
  npm install -g electron 

Note that there are various `npm config set` options to adjust if you're begin a proxy and wish to download npm modules.

First time setup:
=================
* git clone https://github.com/dkelosky/electron-jquery-bootstrap.git
* cd electron-jquery-bootstrap
* npm install 
* electron .

After first setup:
==================
electron . 

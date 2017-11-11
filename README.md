Intro:
======
This is a bare-bones electron app that uses jQuery, Twitter's Bootstrap for
styling, and [Photon kit for icons](http://photonkit.com/).  

A JavaScript version (that should still function is [here][0].

I now only use Typescript for Node.js development, so this sample app has been
updated to reflect that.  I incorporated linting (using [TSLint][1]).

Package.json has the complete list of dependencies, but primarily they are:
* bootstrap, jquery, popper.js and tether.  

This repo with npm globally installed electron is ~ 7mb in size when cloned
and creates a dummy app with this startup screen:

![Alt text](images/Screenshot.jpeg?raw=true "Screen shot")

Clicking the button use nodejs services to alter the text above the button to
show the current OS's type.

Typescript:
===========
For experimentation, a Typescript source file is included.  If you develop
with the Atom editor, you can use ```npm install -g typescript```
and ```apm install atom-typescript``` so that if you edit
file src\setOSWithTS.ts, the file will automatically be compiled to
src\js\setOSwithTS.js.  

These files are currently unused, but show an example of Typescript, and how
to incorporate into an Eelcton project. 

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

[0]:https://github.com/dkelosky/electron-jquery-bootstrap/tree/javascript-version
[1]: https://palantir.github.io/tslint/
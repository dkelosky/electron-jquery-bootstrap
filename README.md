Intro:
======
This is a bare-bones electron app that uses jQuery, Twitter's Bootstrap for
styling, and [Photon kit for icons](http://photonkit.com/).  

A JavaScript version (that should still function is [here][0].

I only use Typescript for Node.js development, so this sample app has been
updated to reflect that.  I incorporated linting (using [TSLint][1]).

Package.json has the complete list of dependencies, but primarily they are:
* bootstrap
* jQuery
* TSLint  

This repo with npm globally installed electron is ~ 7mb in size when cloned
and creates a dummy app with this startup screen:

![Alt text](images/Screenshot.jpeg?raw=true "Screen shot")

Clicking the button use nodejs services to alter the text above the button to
show the current OS's type.

Prerequisites:
==============
* nodejs is required https://nodejs.org/en/download/
* Prebuilt Electron `npm install -g electron`

For the first time setup:
=========================
Issue the following commands after having the prerequisites:
* `git clone https://github.com/dkelosky/electron-jquery-bootstrap.git`
* `cd electron-jquery-bootstrap`
* `npm install`
* `npm run build`
* `electron .`

After first setup:
==================
After closing the app for the first time, it can be restarted via ```electron .```

Linting:
========
`npm run lint`
[VS Code](https://code.visualstudio.com/download) should provide real-time linting if you use this editor.

Building:
=========
(Needed after modifcation to *.ts files) `npm run build` or `tsc` or `tsc --watch` for compile on save and launch the app.

Overview:
=========
`main.ts` loads our main html file `index.html`.  `index.html` is a fairly standard bootstrap-looking html file which 
`requires` our `lib/render/index.js`. 

If you are on a corporate proxy there are various `npm config set` options to
tweek in order to download npm modules.

[0]:https://github.com/dkelosky/electron-jquery-bootstrap/tree/javascript-version
[1]: https://palantir.github.io/tslint/
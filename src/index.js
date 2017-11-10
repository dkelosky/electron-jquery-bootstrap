// main script file to set listers with jQuery and route click events
require('bootstrap'); // load all of Bootstrap's jQuery plugins
var setOS = require('./src/setOS');

// wait for document to load
document.addEventListener('DOMContentLoaded', function () {

    initListeners(); // add listers

});

function initListeners() {
    console.log('initListeners called');

    $('#button-id').click(function () {
        handleOsDivClick(); // call this when button is clicked
    });
};

function handleOsDivClick() {
    console.log('handleOsDivClick called');

    setOS.setOsOnDiv('#os-div'); // pass div to dummy function
};
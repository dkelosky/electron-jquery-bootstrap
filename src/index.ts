// main script file to set listers with jQuery and route click events
// require('bootstrap'); // load all of Bootstrap's jQuery plugins
import { $ } from "bootstrap";
import { OS } from "./util/OS";

// wait for document to load
document.addEventListener("DOMContentLoaded", () => {

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

    // call OS class static method to get the current OS type (as an example)
    $("#os-div").text(OS.getOs());
};


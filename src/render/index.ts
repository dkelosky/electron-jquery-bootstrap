// main script file to set listers with jQuery and route click events
// require('bootstrap'); // load all of Bootstrap's jQuery plugins
// import * as Popper from "popper.js";
// import "bootstrap";
// import Popper from "popper.js;
// import $ from 'jquery'
// import Popper from 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import $ from "bootstrap"
// import {$} from 'bootstrap';
import { OS } from "./../util/OS";
// console.log("@TEST")
// wait for document to load
document.addEventListener("DOMContentLoaded", () => {

    // let test = new Popper();
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


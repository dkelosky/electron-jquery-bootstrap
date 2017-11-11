// main script file to set listers with jQuery and route click events
// this import is this way to get the bundled version of Bootsrap incorporating popper.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as $ from "jquery";

// this is a separate Typescript example class
import { OS } from "./../util/OS";

document.addEventListener("DOMContentLoaded", () => {

    // let test = new Popper();
    initListeners(); // add listers

});

function initListeners() {
    console.log('initListeners called');

    $("#button-id").click( () => {
        handleOsDivClick(); // call this when button is clicked
    });
}

function handleOsDivClick() {
    console.log('handleOsDivClick called');

    // call OS class static method to get the current OS type (as an example)
    $("#os-div").text(OS.getOs());
}


// main script file to set listers with jQuery and route click events
require('bootstrap'); // load all of Bootstrap's jQuery plugins
var setOS = require('./src/setOS');

var marbleColor;

// wait for document to load
document.addEventListener('DOMContentLoaded', function () {

    initListeners(); // add listers

});

function initListeners() {
    console.log('initListeners called');

    $('#button-id').click(function () {
        handleOsDivClick(); // call this when button is clicked
    });

    $('#create-marble').click(function () {
        handleMarbleCreate(); // call this when button is clicked
    });
    
    $('#marble-table').find('tr').on("click", function () {
        marbleColor = $(this).find('td:first').text();
        // var row2 = $(this).find('td:first').next().text();
        console.log("color clicked is: " + marbleColor);
    });

    // $('.marble-row-add').click(function () {
    //     handleMarbleAdd();
    // });

    // $('.marble-row-minus').click(function () {
    //     handleMarbleMinus();
    // });


};

// function handleOsDivClick() {
//     console.log('handleOsDivClick called');

//     setOS.setOsOnDiv('#os-div'); // pass div to dummy function
// };

function insertColor(color) {
    var html = 
    '<tr>...</tr>' +
    '<th><button id="' + color + '-marble-row-add" type="button" class="btn btn-primary btn-sm "><span class="icon icon-plus-squared"/></button>' +
    '<button id="' + color + '-marble-row-minus" type="button" class="btn btn-danger btn-sm marble-row-minus"><span class="icon icon-minus-squared"/></button></th>' +
    '<td>' + color + '</td>' +
    '<td>0</td>';
    $('#marble-table > tbody:last-child').append(html);

    $('#' + color + '-marble-row-add').click(function () {
        handleMarbleAdd(color);
    });
    
    $('#' + color + '-marble-row-minus').click(function () {
        handleMarbleMinus(color);
    });    
}

function handleMarbleCreate() {
    var color = $('#input-color').val();
    if (color) {
        console.log('marble create called to ' + color);
        insertColor(color)
    }
};

function handleMarbleAdd(color) {
    console.log('marble add called for ' + color);
};

function handleMarbleMinus(marbleColor) {
    console.log('marble minus called for ' + color);
};
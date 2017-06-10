
// main script file to set listers with jQuery and route click events
require('bootstrap'); // load all of Bootstrap's jQuery plugins
// var setOS = require('./src/setOS');

var cp = require('child_process');
const BRIGHT_COMMAND = "bright.cmd";

// wait for document to load
document.addEventListener('DOMContentLoaded', function () {
    initView();
    initListeners(); // add listers
    checkDb2();
});

function checkDb2() {

    const SQL_DIR = "./sql/marbles/";
    const SQL_DROP_FILE = "drop.sql";
    const SQL_INSERT_FILE = "insert.sql";
    const SQL_SHOW_FILE = "show.sql";
    const SQL_CREATE_FILE = "create.sql";
    const cmd = ["db2execsql", "--plan", "DSNTEPEH", "--loadlibrary",
        "tucja02.public.db2.load", "--regionid", "IB1A", "--libraryprefix", "ISLDB2.DB2B10.GA.RSU1703", "-f", '"' + SQL_DIR + SQL_SHOW_FILE + '"'];
    // const cmd = ["show", "--jobs"];
    issueBrightCommandBetter(cmd, false, function (json) {
        if (json) {

    $("#loading-info").hide();

    $("#marble-form").show();
        // console.log(json)
        // console.log(json.response[0].rows[0].COLOR)
        console.log("lenght is: " + json.response[0].rows.length)
        for (var i = 0; i < json.response[0].rows.length; i++) {
            insertColor(json.response[0].rows[i].COLOR, json.response[0].rows[i].INVENTORY);
        }
        // json.response.rows.forEach(function(element) {
        //     console.log("color " + color)
        // }, this);

        } else {
            console.error("An error occurred while issuing the brightside command: ");
        }
    });
    // console.log(results);
}

function initView() {
    $("#marble-form").hide();
}

function initListeners() {
    console.log('initListeners called');


    $('#create-marble').click(function () {
        handleMarbleCreate(); // call this when button is clicked
    });

    $("#input-color").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $("#create-marble").click();
        }
    });
};

function insertColor(color, inv) {
    var html =
        '<tr>...</tr>' +
        '<th><button id="' + color + '-marble-row-add" type="button" class="btn btn-primary btn-sm "><span class="icon icon-plus-squared"/></button>' +
        '<button id="' + color + '-marble-row-minus" type="button" class="btn btn-danger btn-sm marble-row-minus"><span class="icon icon-minus-squared"/></button></th>' +
        '<td>' + color + '</td>' +
        '<td>' + inv + '</td>';
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
    // var results = issueBrightCommand(["show", "--jobs"]);
    // console.log(results);

};

function handleMarbleMinus(color) {
    console.log('marble minus called for ' + color);
};

/**
 * Issue a brightside commands and return the result object (or null)
 */
function issueBrightCommandBetter(args, noY, done) {
    //Add the response format json flag. 
    if (!noY) {
        args.push("--responseformatjson");
    }

    // log the args and submit 
    //console.log("Bright args: " + args.toString());
    const ls = cp.spawn(BRIGHT_COMMAND, args, { encoding: 'utf8', env: process.env, windowsVerbatimArguments: true });
    var results;
    var waserror = false;
    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        if (results) {
            results += data;

        } else {
            results = data;
        }
    });

    ls.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        waserror = true;
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        var json;
        try {
            json = JSON.parse(results);
        } catch (e) {
            json = null;
            console.error("An error occurred parsing the brightside command response: " + e);
            console.error("Returned results: ");
            // console.error(results.stdout); // TODO(kelosky): Can you do this??
            done(null)
        }
        waserror ? done(null) : done(json);
    });

}

/**
 * Issue a brightside commands and return the result object (or null)
 */
function issueBrightCommand(args, noY) {
    //Add the response format json flag. 
    if (!noY) {
        args.push("--responseformatjson");
    }

    // log the args and submit 
    //console.log("Bright args: " + args.toString());
    var results = cp.spawnSync(BRIGHT_COMMAND, args, { encoding: 'utf8', env: process.env, windowsVerbatimArguments: true });

    /**
     * Return null of an error occurred 
     */
    if (results.error) {
        console.error("An error occurred while issuing the brightside command: " + results.error);
        return null;
    }

    /**
     * Return the parsed json or null if an error occurrs 
     */
    if (results.status !== 0) {
        console.error("An error occurred while issuing the brightside command.");
        console.error("Status code: " + results.status);
        console.error("Stderr: " + results.stderr);
        console.error("Stdout: " + results.stdout);
    }

    var json;
    try {
        json = JSON.parse(results.stdout);
    } catch (e) {
        json = null;
        console.error("An error occurred parsing the brightside command response: " + e);
        console.error("Returned results: ");
        console.error(results.stdout);
    }
    return json;
}

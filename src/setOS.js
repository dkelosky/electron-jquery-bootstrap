var os = require('os');

// simple external nodejs javascript file to set the current OS on an input div with jQuery
exports.setOsOnDiv = function(div) {

  console.log("setOsOnDiv called");
  
  $(div).text(os.type);
};
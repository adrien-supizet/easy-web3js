const fs = require('fs');
var recursive = require('recursive-readdir');
var path = require('path');

function getContractInterface(pathSupplied,contractName) {
  console.log(pathSupplied,contractName)
  recursive(pathSupplied, function(err, files) {
    files.filter(element => selectFile(element,contractName)).forEach(value => {
      //console.log(value);
    });
      return files;
  });
}

function selectFile(element,contractName) {
    return element.slice(-5-contractName.length) === contractName+'.json';
}

module.exports = {getContractInterface}
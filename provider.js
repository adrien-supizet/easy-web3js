const Web3 = require("web3");
const web3 = new Web3();
const abi = require('./contract')
/*
const ABI = require(path_to_interface);

const ethClient_url = "http://localhost:8545/";
var tervecnuInterface = require("./Tervecnu.json");
const tervecnuAddress = "0x447bbfd80060345f9e21305772c1ea27d094d4a3";
web3.setProvider(new Web3.providers.HttpProvider(ethClient_url));
//
var contract = web3.eth.contract(ABI).at(tervecnuAddress);

*/

module.exports = {
    web3
};

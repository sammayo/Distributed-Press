const Web3 = require('web3');
const fs = require("fs");
const abi = require("ethereumjs-abi");

const DPContract = artifacts.require('./DistributedPress.sol');

var ad = "0x" + abi.rawEncode(["bytes32"], [ '0xa63bbbc' ]).toString('hex');

contract('User Demo Testing', async function(accounts) {
    let DP = await DPContract.deployed();

    try {
	console.log(await DP.numberOfHashes.call());
    }
    catch (err){
	console.log(err);
    }
    // console.log(await provider.getAddress());
    //    console.log(await DP.addEntry.estimateGas());
    // console.log(DP);
    try {
	console.log(await DP.addEntry('rast', 'yo', accounts[0]));
    }
    catch (err){
        console.log('yoooo');
	throw(err);
    }
});


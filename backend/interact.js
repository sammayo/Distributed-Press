const Web3 = require('web3');
const TruffleContract = require("truffle-contract");
const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
const abi = require("ethereumjs-abi");

 
var ad = "0x" + abi.rawEncode(["bytes32"], [ '0xa63bbb' ]).toString('hex');

let secrets = JSON.parse(fs.readFileSync("secrets.json", "utf8"));
let mnemonic = secrets.mnemonic;
let provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/");
let networkId = 4;
//let contractAddress = '0x127aa7dca9AeB8422De13cc4DC1C984d062dF4C5';
//let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var DPContractJson = JSON.parse(fs.readFileSync("build/contracts/DistributedPress.json", "utf8"));
var DPContract = TruffleContract(DPContractJson);

DPContract.setProvider(provider);
DPContract.setNetwork(networkId);

const interact = async () => {
    //let DP = await DPContract.at(contractAddress);
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
    console.log(provider.address);
    try {
        console.log(await DP.addEntry(ad, 'yo', '0x127aa7dca9AeB8422De13cc4DC1C984d062dF4C5', {from:provider.address}));
    }
    catch (err){
        console.log(err);
    }
};

interact();

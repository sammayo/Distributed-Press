const Web3 = require('web3');
const TruffleContract = require("truffle-contract");
const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs")

let secrets = JSON.parse(fs.readFileSync("secrets.json", "utf8"));
let mnemonic = secrets.mnemonic;
let provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io");
let networkId = 4;
let contractAddress = '0x127aa7dca9AeB8422De13cc4DC1C984d062dF4C5';

var DPContractJson = JSON.parse(fs.readFileSync("build/contracts/DistributedPress.json", "utf8"));
var DPContract = TruffleContract(DPContractJson);

DPContract.setProvider(provider);
DPContract.setNetwork(networkId);

const interact = async (DPContract) => {
    let DP = await DPContract.at(contractAddress);
};

interact(DPContract);

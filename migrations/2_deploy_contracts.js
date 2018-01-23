var AppicsICO = artifacts.require("AppicsICO.sol");
var XAP = artifacts.require("AppicsToken.sol");
/*
Company - accounts[0]
AppicsFund -accounts[1]
EcosystemFund - accounts[2]
SteemitFund - accounts[3]
RewardFund - accounts[4]
Bounty - accounts[4]
ReferralFund - accounts[5]
Manager - accounts[6]
Controller_Address1 - accounts[7] 
Controller_Address2 - accounts[7]
Controller_Address3 - accounts[7]
Oracle - accounts[8]
ETH investor - accounts[9]
Other Crypto Investor - accounts[10]*/
module.exports = function(deployer, network, accounts) {

    deployer.deploy(
    		AppicsICO,
    		accounts[0],
    		accounts[1],
    		accounts[2],
    		accounts[3],
    		accounts[4],
    		accounts[6],
    		accounts[7], 
    		accounts[7],
    		accounts[7],
    		accounts[8]
    );

};


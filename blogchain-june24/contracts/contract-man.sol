// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Validity {
    address private owner;

    struct AccountData {
        string status; // Creator or Expert
        uint64 valscore;
    }

    constructor() {
        owner = msg.sender;
    }

    modifier only_owner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    mapping(address => AccountData) public accountData;

    function newAccount(address walletSeed) public {
        AccountData storage data = accountData[walletSeed]; // creates an instance of the AccountData struct
        data.valscore = 0;
        data.status = "Creator";
    }

    function expert_ascension(address walletSeed) public only_owner {
        AccountData storage data = accountData[walletSeed];
        data.valscore = 501; // Comment this out after testing
        if (data.valscore > 500) {
            data.status = "expert";
        }
    }

    function create_post(address walletSeed, string memory content) public {

    }
}

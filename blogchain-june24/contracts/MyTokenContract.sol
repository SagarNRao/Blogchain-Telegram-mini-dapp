// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyTokenContract is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        // Initialize the token with a total supply of 1 million tokens
        _mint(msg.sender, 1000000 * (10**decimals()));
    }
}
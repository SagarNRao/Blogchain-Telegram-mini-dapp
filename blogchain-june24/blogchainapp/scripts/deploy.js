// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for your contract
  const MyContract = await ethers.getContractFactory("MyValContract");
  const TokenContract = await ethers.getContractFactory("MyTokenContract");

  // Deploy the contract
  const myContract = await MyContract.deploy();
  const tokenContract = await TokenContract.deploy();

  await myContract.deployed();
  await tokenContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
  console.log("Deploy transaction hash:", myContract.deployTransaction.hash);
  console.log("\n");
  console.log("TokenContract deployed to:", tokenContract.address);
  console.log("Token Deploy transaction hash:", tokenContract.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

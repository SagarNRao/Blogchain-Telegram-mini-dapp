// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for your contract
  const MyContract = await ethers.getContractFactory("MyValContract");

  // Deploy the contract
  const myContract = await MyContract.deploy();

  await myContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
  console.log("Deploy transaction hash:", myContract.deployTransaction.hash);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
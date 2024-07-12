const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyValContract = await ethers.getContractFactory("MyValContract");
  const myValContract = await MyValContract.deploy();
  await myValContract.deployed();

  const TokenContract = await ethers.getContractFactory("MyTokenContract");
  const tokenContract = await TokenContract.deploy();
  await tokenContract.deployed();

  console.log("MyValContract deployed to:", myValContract.address);
  console.log("Transaction hash:", myValContract.deployTransaction.hash);

  console.log("MyTokenContract deployed to:", tokenContract.address);
  console.log("Transaction hash:", tokenContract.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
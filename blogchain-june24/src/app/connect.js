const ethers = require("ethers");

async function connect() {
  if (window.ethereum != "undefined") {
    await ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please install MetaMask");
  }
  async function execute() {
    
  }
}
module.exports = {
  connect,
  execute,
};

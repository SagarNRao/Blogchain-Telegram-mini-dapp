import { provider } from './blockchainService';
import contractABI from 'artifacts-zk/contracts/Contract.sol/MyValContract.json';

const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

// Create a contract instance
export const contract = new ethers.Contract(contractAddress, contractABI, provider);
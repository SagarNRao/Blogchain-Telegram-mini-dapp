import { provider } from './blockchainService';
import contractABI from 'artifacts-zk/contracts/Contract.sol/MyValContract.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Create a contract instance
export const contract = new ethers.Contract(contractAddress, contractABI, provider);
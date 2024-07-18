import { provider } from './blockchainService';
import contractABI from 'artifacts-zk/contracts/Contract.sol/MyValContract.json';

const contractAddress = '0x62A71C820A229c38C9fc40a8DC71971EA1B7A034';

// Create a contract instance
export const contract = new ethers.Contract(contractAddress, contractABI, provider);
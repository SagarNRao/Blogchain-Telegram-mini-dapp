import { ethers } from 'ethers';

// zkSync Testnet RPC URL from your hardhat.config.js
const zkSyncTestnetRPC = 'https://zksync2-testnet.zksync.dev';

// Connect to the zkSync Testnet
export const provider = new ethers.providers.JsonRpcProvider(zkSyncTestnetRPC);
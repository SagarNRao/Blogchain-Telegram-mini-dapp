// components/ConnectWalletButton.tsx

import React from 'react';
import { client } from '../app/client';

const ConnectWalletButton: React.FC = () => {
  const connectToMetaMask = async () => {
    try {
      // Your MetaMask connection logic here
      // For example, using the @metamask/sdk-react package
      // or Web3.js to connect to the user's wallet.
      console.log('Connecting to MetaMask...');
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <button onClick={connectToMetaMask}>Connect Wallet</button>
  );
};

export default ConnectWalletButton;

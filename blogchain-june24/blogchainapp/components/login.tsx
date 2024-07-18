"use client"

import * as React from 'react';
import { useConnect } from 'wagmi';

export function ConnectWalletButton() {
  const { connectors, connect } = useConnect();

  return (
    <div>
      <h2>Connect Wallet</h2>
      <ul>
        {connectors.map((connector) => (
          <li key={connector.uid}>
            <button onClick={() => connect({ connector })}>
              {connector.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
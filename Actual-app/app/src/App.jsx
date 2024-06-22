import { useMemo } from "react";
import { BlogProvider } from "src/context/Blog";
import { Router } from "src/router";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectionProvider, WalletProvider,} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "./App.css";

export const App = () => {

  const endpoint = ""

  <ConnectionProvider endpoint={}>
    <WalletProvider>
      <BlogProvider>
        <Router />
      </BlogProvider>
    </WalletProvider>
  </ConnectionProvider>;
};

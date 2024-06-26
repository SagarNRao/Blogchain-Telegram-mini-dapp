import { ethers, Provider } from "ethers";
import React, { useState } from "react";

export default function SimpleStore() {
  const [ErrorMessage, setErrorMessage] = useState<string | null>(null);
  const [DefaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [ConnButtonText, setConnButtonText] = useState<string | null>(
    "Connect Wallet"
  );

  const [CurrentContractVal, setCurrentContractVal] = useState<string | null>(
    null
  );

  const [Provider, setProvider] = useState<any | null>(null);
  const [Signer, setSigner] = useState<any | null>(null);
  const [Contract, setContract] = useState<any | null>(null);

  const ConnectWalletHandler = async () => {
    if (!(window as any).ethereum) {
      throw new Error("MetaMask is not installed!");
    } else {
      await (window as any).ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Connected");
        });
    }

    const accountChangedHandler = (newaccount: any) => {
      setDefaultAccount(newaccount);
      updateEthers();
    };

    const updateEthers = () => {
        let tempProvider = new ethers.Provider.Web3Provider((window as any).ethereum);
    };

    return (
      <div>
        <h3>Connection to wallet</h3>
        <button onClick={ConnectWalletHandler}>
          {ConnButtonText || "Connect"}
        </button>
        {ErrorMessage && <p>{ErrorMessage}</p>}
        {/* <h3>Current public address: {DefaultAccount}</h3> */}
      </div>
    );
  };
}

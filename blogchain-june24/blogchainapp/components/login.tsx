"use client";

import { chain, client } from "../utils/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useActiveAccount } from "thirdweb/react";

export const Login: React.FC = () => {
  const account = useActiveAccount();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {account ? (
        <div style={{ textAlign: "center" }}>
          <ConnectButton />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <ConnectButton />
        </div>
      )}
    </div>
  );
};

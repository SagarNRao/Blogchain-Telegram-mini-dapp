"use client";

import { Login } from "../../components/login";
import ContractDataFetcher from "./feed";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import logo from "../../public/logo.png";
import Image from "next/image";
import NewPostForm from "../../components/createpost";
import Web3 from "web3";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import React from "react";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ResolvedRegister, WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { config } from "./wagmi";
import MyValContract from "./../../../artifacts-zk/contracts/Contract.sol/MyValContract.json";

const client = new QueryClient();

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex h-100px items-center mx-auto p-2 outline outline-1 outline-gray-500">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Image src={logo.src} alt="" width={175} height={175} />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div style={{ width: "1000px" }}></div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Login />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="p-1"></div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Avatar>
                <AvatarImage src="https://media.istockphoto.com/id/1343859143/fr/photo/t%C3%AAte-de-poulet-en-caoutchouc-surprise-de-pr%C3%A8s-isol%C3%A9e-sur-blanc.jpg?s=1024x1024&w=is&k=20&c=80FDwxRmCykrxG8893W0beo8xyz91K_wTcnoS1F6vwM="></AvatarImage>
              </Avatar>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="p-3"></div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <div className="flex justify-center mb-20">
            {isClient && <NewPostForm web3={new Web3()} account={""} />}
          </div>
          <div className="flex justify-center mb-20">
            <ContractDataFetcher />
          </div>
        </div>
      </main>
    </>
  );
}

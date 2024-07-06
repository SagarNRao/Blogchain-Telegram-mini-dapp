"use client";

import { PropsWithChildren } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import {
    getDefaultConfig,
    RainbowKitProvider,
    lightTheme,
    darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export function WalletProvider(props: PropsWithChildren) {
    const config = getDefaultConfig({
        appName: "Food Ordering TMA",
        projectId: "e716a69c7e2e023e9484c136f6a1a079",
        chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
        ssr: true, // uses server side rendering
    });

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={{
                        lightMode: lightTheme(),
                        darkMode: darkTheme(),
                    }}
                >
                    {props.children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Login } from "../../components/login";
import ContractDataFetcher from "./feed";
import { WalletProvider } from "../../components/providers";
// Import QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "thirdweb SDK + Next starter",
//   description:
//     "Starter template for using thirdweb SDK with Next.js App router",
// };

// Instantiate a QueryClient
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap your component tree with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <WalletProvider>{children}</WalletProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}

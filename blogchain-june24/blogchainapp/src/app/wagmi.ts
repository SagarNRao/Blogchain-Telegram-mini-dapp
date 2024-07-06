import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'e716a69c7e2e023e9484c136f6a1a079',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
  ],
  ssr: true,
});
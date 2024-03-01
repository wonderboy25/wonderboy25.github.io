import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import {
  sepolia,
  mainnet,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  arbitrum,
  arbitrumSepolia,
  polygon,
  polygonMumbai,
  base,
  baseSepolia,
} from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, avalanche, avalancheFuji, bsc, bscTestnet, arbitrum, arbitrumSepolia, polygon, polygonMumbai, base, baseSepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http()
  },
});

import AvalancheIcon from "../assets/avalanche.png";
import BrcIcon from "../assets/bitcoin.png";
import EthereumIcon from "../assets/ethereum.png";
import ArbitrumIcon from "../assets/arbitrum.png";
import BaseIcon from "../assets/base.svg";
import PolygonIcon from "../assets/polygon.png";
import BscIcon from "../assets/bsc.png";

export const appChains = [
  {
    isEvm: false,
    name: "Bitcoin",
    key: "btc",
    chainId: 0,
    contractAddress: "",
    icon: BrcIcon,
    percentDeduction: 0,
    ethCharges: 0
  },
  {
    isEvm: true,
    name: "Ethereum",
    key: "eth",
    chainId: 1,
    contractAddress: "0xfe92c0d07089e4a02847a7c12fe2b38a7bb5c8b2",
    contractLink: "https://etherscan.io/address/0xfe92c0d07089e4a02847a7c12fe2b38a7bb5c8b2",
    icon: EthereumIcon,
    ethCharges: 0.01,
    percentDeduction: 0.5,
    chargeTag: "ETH"
  },
  {
    isEvm: true,
    name: "Avalanche",
    key: "avax",
    chainId: 43114,
    contractAddress: "0xa02CF197f4E98aa652fD11D21575C18F937A408f",
    contractLink: "https://snowtrace.io/address/0xa02CF197f4E98aa652fD11D21575C18F937A408f",
    icon: AvalancheIcon,
    ethCharges: 0.0001,
    percentDeduction: 0.5,
    chargeTag: "AVAX"
  },
  {
    isEvm: true,
    name: "Arbitrum",
    key: "arbi",
    contractAddress: "0xa02CF197f4E98aa652fD11D21575C18F937A408f",
    contractLink: "https://arbiscan.io/address/0xa02CF197f4E98aa652fD11D21575C18F937A408f",
    chainId: 42161,
    icon: ArbitrumIcon,
    ethCharges: 0.0001,
    percentDeduction: 0.5,
    chargeTag: "ETH"
  },
  {
    isEvm: true,
    name: "Polygon",
    key: "poly",
    contractAddress: "0xbf8157e7a485b31b2f37bce7e41a2ad4a0553fa5",
    contractLink: "https://polygonscan.com/address/0xbf8157e7a485b31b2f37bce7e41a2ad4a0553fa5",
    chainId: 137,
    icon: PolygonIcon,
    ethCharges: 0.0001,
    percentDeduction: 0.5,
    chargeTag: "MATIC"
  },
  {
    isEvm: true,
    name: "Binance Smart Chain",
    key: "bsc",
    contractAddress: "0x8e894bff5a3bdc472f161b75eb841214c5fe8f16",
    contractLink: "https://bscscan.com/address/0x8e894bff5a3bdc472f161b75eb841214c5fe8f16",
    chainId: 56,
    icon: BscIcon,
    ethCharges: 0.0001,
    percentDeduction: 0.5,
    chargeTag: "BSC"
  },
  {
    isEvm: true,
    name: "Base",
    key: "base",
    contractAddress: "0xADDD898A46c5955df08aD08134b06Dd727860EAc",
    contractLink: "https://basescan.org/address/0xADDD898A46c5955df08aD08134b06Dd727860EAc",
    chainId: 8453,
    icon: BaseIcon,
    ethCharges: 0.01,
    percentDeduction: 0.5,
    chargeTag: "bETH"
  }
];

export const getWalletStringForType = (chainType) => {
  if (chainType === "b") {
    return "unisat";
  }
  if (chainType === "e") {
    return "metamask";
  }
  if (chainType === "s") {
    return "phantom";
  }
};

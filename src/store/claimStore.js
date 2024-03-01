import { create } from "zustand";

export const useClaimStore = create((set) => ({
  ordinal: {
    name: "Loading...",
    symbol: "SATS",
    icon: "",
    contracts: [
      {
        chainId: 1,
        chain: "ETH",
        contractAddress: "Loading...",
        enabled: false,
      },
    ],
  },
  amount: 0,
  setAmount: (amount) => {
    set({ amount: amount });
  },
  setOrdinal: (ordinal) => {
    set({ ordinal: ordinal });
  }
}));

import { create } from "zustand";

export const useBlockchainStore = create((set) => ({
  blockchainTo: {
    name: "Loading2...",
    key: "eth",
    icon: "/blockchains/ethIcon.png",
    chainId: -1,
    enabled: true,
  },
  blockchainFrom: {
    name: "Loading...",
    key: "eth",
    icon: "/blockchains/ethIcon.png",
    chainId: -1,
    enabled: true,
  },
  blockchainList: [],
  // initialBlockchains: (blockchainList) => {
  //   set(() => {
  //     return {
  //       blockchainTo: blockchainList[0],
  //       blockchainFrom: blockchainList[1],
  //       blockchainList: blockchainList,
  //     };
  //   });
  // },
  switchBlockchains: () =>
    set((state) => {
      return {
        blockchainTo: state.blockchainFrom,
        blockchainFrom: state.blockchainTo,
      };
    }),
  setBlockchainTo: (blockchain) =>
    set((state) => {
      if (state.blockchainTo.name === blockchain.name) {
        return state;
      }
      if (state.blockchainFrom.name === blockchain.name) {
        return {
          blockchainTo: state.blockchainFrom,
          blockchainFrom: state.blockchainTo,
        };
      }
      return { ...state, blockchainTo: blockchain };
    }),
  setBlockchainFrom: (blockchain) =>
    set((state) => {
      if (state.blockchainFrom.name === blockchain.name) {
        return state;
      }
      if (state.blockchainTo.name === blockchain.name) {
        return {
          blockchainFrom: state.blockchainTo,
          blockchainTo: state.blockchainFrom,
        };
      }
      return { ...state, blockchainFrom: blockchain };
    }),
}));

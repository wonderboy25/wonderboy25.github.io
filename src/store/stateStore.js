import { create } from "zustand";

export const useStateStore = create((set) => ({
  // State
  bridgeCheckbox: false,
  unisatInstalled: false,
  uniSatAddress: "",
  swapState: "DEPOSIT",

  // Actions
  setBridgeCheckbox: (value) => set(() => ({ bridgeCheckbox: value })),
  setUnisatStatus: (value) => set(() => ({ unisatInstalled: value })),
  setUniSatAddress: (value) => set(() => ({ uniSatAddress: value })),
  switchState: () =>
    set((state) => {
      if (state.swapState === "DEPOSIT") {
        return { swapState: "CLAIM" };
      } else {
        return { swapState: "DEPOSIT" };
      }
    }),
}));

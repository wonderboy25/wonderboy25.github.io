import { appChains } from '../utils/chains'

export const getChainsService = async () => {
  // const response = await fetch(
  //   `${import.meta.env.VITE_BACKEND_URL}/availableChains`,
  // );
  // return await response.json();
  return appChains;
};

import { assetTokens } from '../utils/tokens'

export const getAssetsService = async () => {
  // const response = await fetch(
  //   `${import.meta.env.VITE_BACKEND_URL}/availableAssets`,
  // );
  // return await response.json();
  return assetTokens;
};

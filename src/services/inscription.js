import axios from 'axios';

export const postInscription = async (chain, btcaddress, evmAddres, tokenName, tokenVal, inscriptionId) => {
  try{
    const { data: response } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/init_payment`,{
      chain: chain,
      btc_address: btcaddress,
      evm_address: evmAddres,
      ticker_name: tokenName,
      ticker_val: tokenVal.toString(),
      inscription_id: inscriptionId
    });
    return response;
    // console.log('resp', resp)  
  } catch(err){
    console.log(err)
  }
};
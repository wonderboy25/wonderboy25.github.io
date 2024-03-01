import { Box, Button } from "@chakra-ui/react";
import "../style.css";
import { useStateStore } from "../../../../store/stateStore.js";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";
import { useOrdinalStore } from "../../../../store/ordinalStore.js";
import { EVM_ABI } from '../../../../utils/evmAbi.js'
import { useEffect, useState } from "react";
import {useAccount, useWriteContract} from "wagmi";
import { parseUnits } from 'viem'
import {toast} from "react-toastify";

const CTA_Button = () => {
  const { isConnected, address: evmAddress } = useAccount();
  const termsAccepted = useStateStore((state) => state.bridgeCheckbox);
  const uniSatAddress = useStateStore((state) => state.uniSatAddress);
  const toBlockchain = useBlockchainStore((state) => state.blockchainTo);
  const fromBlockchain = useBlockchainStore((state) => state.blockchainFrom);
  const assetSelected = useOrdinalStore((state) => state.ordinal);
  const ordinalAmount = useOrdinalStore((state) => state.amount);
  const swapState = useStateStore((state) => state.swapState);

  const { data: contractWriteData, error: contractWriteError , writeContract } = useWriteContract()

  const errorHandeler = (error) => {
    if(error) {
      // console.log(error.name)
      if(error.name == 'ContractFunctionExecutionError') {
        toast.error(error.shortMessage);
      }
      else if(error.name == 'TransactionExecutionError') {
        toast.error(error.shortMessage);
      } else {
        toast.error(error.name);
      }
    }
  }
  const transferHandler = async () => {
    try {
      if(!isConnected || !uniSatAddress){
        toast.error("Please try to connect wallet correctly.");
        return;
      }

      if(parseFloat(ordinalAmount) <= 0 || isNaN(parseFloat(ordinalAmount))) {
        toast.error("Please try to input correct swap amount.");
        return;
      }

      writeContract({
        abi: EVM_ABI,
        address: fromBlockchain.contractAddress,
        functionName: 'burnERCTokenForBRC',
        args: [
          toBlockchain.key,
          assetSelected.name,
          parseUnits( String(ordinalAmount), 18),
          toBlockchain.chainId == 0 ? uniSatAddress : evmAddress
        ],
        value: parseUnits(String(fromBlockchain.ethCharges), 18),
        chainId: fromBlockchain.chainId
        },{
          onSuccess(data) {
            toast.info("Transfer Transaction is successful!")
          },
          onError(error){
            console.log(error)
            errorHandeler(error)
        }})

    } catch (e) {
      console.log(e)
    }
  };

  return (
    <Box className={"swapContainer"}>
      <Button
        width={"100%"}
        className={"CTAButton"}
        variant={"gradient"}
        isDisabled={!termsAccepted}
        _disabled={{ opacity: "0.4" }}
        _hover={{
          opacity: termsAccepted ? "0.65" : "0.2",
          cursor: termsAccepted ? "pointer" : "not-allowed",
        }}
        onClick={async () => await transferHandler()}
      >
        {swapState === "DEPOSIT" ? "Transfer" : "Claim"}
      </Button>
    </Box>
  );
};

export default CTA_Button;

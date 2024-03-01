import { Box, Button } from "@chakra-ui/react";
import "../style.css";
import { useStateStore } from "../../../../store/stateStore.js";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";
import { useClaimStore } from "../../../../store/claimStore.js";
import { EVM_ABI } from '../../../../utils/evmAbi.js'
import { useAccount, useWriteContract } from "wagmi";
import { toast } from "react-toastify";

const CTA_Claim_Button = () => {
  const { isConnected, address: evmAddress } = useAccount();
  const termsAccepted = useStateStore((state) => state.bridgeCheckbox);
  const fromBlockchain = useBlockchainStore((state) => state.blockchainFrom);

  const claimAmount = useClaimStore((state) => state.amount);
  const claimSetAmount = useClaimStore((state) => state.setAmount);
  const assetClaimSelected = useClaimStore((state) => state.ordinal);
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
      if( !isConnected ) {
        toast.error("Please try to connect wallet correctly.");
        return;
      }

      if( claimAmount == 0 ) {
        toast.error("Sorry, Your claim amount is zero.");
        return;
      }

      writeContract({
        abi: EVM_ABI,
        address: fromBlockchain.contractAddress,
        functionName: 'claimERCEntryForWallet',
        args: [
          assetClaimSelected.name
        ],
        chainId: fromBlockchain.chainId
        },{
          onSuccess(data) {
            toast.info("Claim Transaction is successful!")
            claimSetAmount(0)
          },
          onError(error){
            console.log(error)
            errorHandeler(error)
        }})

    } catch (e) {
      console.log(e)
      toast.error(e);
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

export default CTA_Claim_Button;

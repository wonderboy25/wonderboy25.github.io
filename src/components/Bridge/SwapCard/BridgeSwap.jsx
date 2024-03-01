import { Box, Button, useDisclosure  } from "@chakra-ui/react";
import "./style.css";
import "../sharedStyles.css";
import SwapHeader from "./Components/SwapHeader.jsx";
import FromSelector from "./Components/FromSelector.jsx";
import SwitchButton from "./Components/SwitchButton.jsx";
import ToSelector from "./Components/ToSelector.jsx";
import AssetSelector from "./Components/AssetSelector.jsx";
import AssetClaimSelector from "./Components/AssetClaimSelector.jsx";
import WarningCheckbox from "./Components/WarningCheckbox.jsx";
import InscribeModal from "./Components/InscribeModal.jsx";
import CTA_Button from "./Components/CTA_Button.jsx";
import CTA_Claim_Button from "./Components/CTA_Claim_Button.jsx";
import ConfirmationText from "./Components/ConfirmationText.jsx";
import WalletHelperText from "./Components/WalletHelper.jsx";
import { useBlockchainStore } from "../../../store/blockchainStore.js";
import AmountSelector from "./Components/AmountSelector.jsx";
import { useStateStore } from "../../../store/stateStore.js";
import WalletAddressContainer from "./Components/walletContainer.jsx";
import { useEffect, useState } from "react";
import { useAccount, useSwitchChain } from 'wagmi'
import { readContract } from '@wagmi/core'
import { wagmiConfig } from '../../../utils/wagmiSetup.js'
import { formatUnits } from 'viem'
import { toast } from "react-toastify";
import { useOrdinalStore } from "../../../store/ordinalStore.js";
import { useClaimStore } from "../../../store/claimStore.js";
import { TOKEN_ABI } from '../../../utils/tokenAbi.js'
import { EVM_ABI } from '../../../utils/evmAbi.js'

const BridgeSwapCard = () => {
  const { address: evmAddress} = useAccount()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toBlockchain = useBlockchainStore((state) => state.blockchainTo);
  const fromBlockchain = useBlockchainStore((state) => state.blockchainFrom);
  const swapState = useStateStore((state) => state.swapState);

  const termsAccepted = useStateStore((state) => state.bridgeCheckbox);
  const ordinalAmount = useOrdinalStore((state) => state.amount);
  const assetSelected = useOrdinalStore((state) => state.ordinal);
  const setBallanceAmount = useOrdinalStore((state) => state.setBallance);
  const assetClaimSelected = useClaimStore((state) => state.ordinal);
  const setClaimAmount = useClaimStore((state) => state.setAmount);

  const { switchChain } = useSwitchChain(wagmiConfig)

  useEffect(() => {
    (async () => {
      try{
        if (fromBlockchain.chainId == 0) {
          
        } else if (fromBlockchain.chainId > 0) {
          switchChain({chainId: fromBlockchain.chainId},{
            onError(error) {
              console.log(error.details)
              toast.error(error.details)
            }
          })
        }
      }catch(e) {
        console.log(e)
      }
    })();
  }, [fromBlockchain]);

//Deposit
  useEffect(() => {
    (async () => {
      try{
        if(swapState === "CLAIM") return;
        if (fromBlockchain.chainId == 0) {
          // await getAssetsBrc20Service(assetSelected)
          setBallanceAmount(0);
        } else if (fromBlockchain.chainId > 0) {
          const token_address = assetSelected?.contracts.filter(x => x.chainId == fromBlockchain.chainId)||[];
          const result = await readContract(wagmiConfig, {
            abi: TOKEN_ABI,
            address: token_address.length?token_address[0].contractAddress:'',
            functionName: 'balanceOf',
            args: [evmAddress],
            chainId: fromBlockchain.chainId
          })
          setBallanceAmount(Number(formatUnits(result, 18)));
        }
      }catch(e) {
        console.log(e)
        setBallanceAmount(0);
      }
    })();
  }, [fromBlockchain, assetSelected, evmAddress]);

//Claim
  useEffect(() => {
    (async () => {
      try{
        if(swapState === "DEPOSIT") return;
        if (fromBlockchain.chainId == 0) {
          setClaimAmount(0);
        } else if (fromBlockchain.chainId > 0) {
          const result = await readContract(wagmiConfig, {
            abi: EVM_ABI,
            address: fromBlockchain.contractAddress,
            functionName: 'checkPendingERCToClaimForWalletWithTickers',
            args: [evmAddress, [assetClaimSelected.name]],
            chainId: fromBlockchain.chainId
          })  
          // console.log(result)
          const claim_ballance = result[1].length?result[1][0]:0n
          setClaimAmount(Number(formatUnits(claim_ballance, 18)));
        }
      }catch(e) {
        console.log(e)
      }
    })();
  }, [fromBlockchain, assetClaimSelected, evmAddress]);

  return (
    <Box
      maxWidth={"656px"}
      minWidth={"330px"}
      className={"cardBorder"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      h={"100%"}
    >
      <Box>
        <SwapHeader />
        {swapState === "DEPOSIT" && (
          <>
            <FromSelector fromBlockchain={fromBlockchain} />
            <SwitchButton />
            <Box
              display={"flex"}
              className={"swapContainer"}
              flexDir={{ base: "column", xl: "row" }}
              w={"100%"}
              rowGap={"12px"}
              columnGap={"30px"}
              mt={0}
            >
              <Box w={"100%"}>
                <ToSelector toBlockchain={toBlockchain} />
              </Box>
              <Box w={"100%"}>
                <AssetSelector />
              </Box>
            </Box>
            <Box marginX={"40px"}>
              <AmountSelector />
            </Box>
            <WarningCheckbox />
            {fromBlockchain.chainId==0?(
              <>
                <Box className={"swapContainer"}>
                  <Button
                    width={"100%"}
                    className={"CTAButton"}
                    variant={"gradient"}
                    isDisabled={!termsAccepted || !parseFloat(ordinalAmount) || parseFloat(ordinalAmount)<=0}
                    _disabled={{ opacity: "0.4" }}
                    _hover={{
                      opacity: termsAccepted ? "0.65" : "0.2",
                      cursor: termsAccepted ? "pointer" : "not-allowed",
                    }}
                    onClick={onOpen}
                  >
                    {swapState === "DEPOSIT" ? "Transfer" : "Claim"}
                  </Button>
                  {evmAddress? <InscribeModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> : toast.error("Please try to connect wallet")}
                </Box>
              </>
            ):(
              <CTA_Button />
            )}
            <ConfirmationText />
          </>
        )}
        {swapState === "CLAIM" && (
          <Box>
            <FromSelector fromBlockchain={fromBlockchain} />
            {fromBlockchain.chainId != 0 && (
            <>
              <WalletAddressContainer />
              <Box marginX={"40px"}>
                <AssetClaimSelector />
              </Box>
              <WarningCheckbox />
              <CTA_Claim_Button />
            </>)}
          </Box>
        )}
      </Box>
      <WalletHelperText />
    </Box>
  );
};

export default BridgeSwapCard;

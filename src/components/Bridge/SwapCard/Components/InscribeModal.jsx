import { Box, Button, FormControl, FormLabel, Input, InputLeftAddon, InputGroup, Text, Flex, IconButton, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import "../style.css";
import "../../sharedStyles.css";
import { useStateStore } from "../../../../store/stateStore.js";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";
import { useOrdinalStore } from "../../../../store/ordinalStore.js";

import { useEffect, useState, useRef  } from "react";
import {useAccount} from "wagmi";
import {toast} from "react-toastify";
import { postInscription } from "../../../../services/inscription.js";

const InscribeModal = ({isOpen, onOpen, onClose}) => {
  const initialRef = useRef(null)
  const { address: evmAddress} = useAccount()
  const uniSatAddress = useStateStore((state) => state.uniSatAddress);
  const assetSelected = useOrdinalStore((state) => state.ordinal);
  const ordinalAmount = useOrdinalStore((state) => state.amount);
  const toBlockchain = useBlockchainStore((state) => state.blockchainTo);
  const [inscriptionId, setInscriptionId] = useState('');
  const treasureAddress = import.meta.env.VITE_TREASURE;
  const brccontent = `{"p":"brc-20","op":"transfer","tick":"${assetSelected.name}","amt":"${parseFloat(ordinalAmount)}","chain":"${toBlockchain.key}","evmaddress":"${evmAddress}"}`

  
  const toastChakra = useToast();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toastChakra({
        title: "Copied to clipboard",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toastChakra({
        title: "Failed to copy",
        description: err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleBrcTransfer = async () => {
    try{
      if(!inscriptionId) { //need to validate inscirption id with ordinal.com
        toast.error("Input Correct Inscription Id.")
        return;
      }

      const postResult = await postInscription(
        toBlockchain.key,
        uniSatAddress,
        evmAddress,
        assetSelected.name,
        parseFloat(ordinalAmount),
        inscriptionId
      );
      if(postResult.status) {
        const data = await window.unisat.sendInscription(
          treasureAddress,
          inscriptionId,
          {
            // feeRate: 1 //testnet
          }
        );
      } else {
        toast.error(`Token ${postResult.data}`);
      }

    } catch(err){
      console.log(err)
      toast.error('Error');
    }
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
      <ModalOverlay bg='none' backdropFilter='auto' backdropInvert='10%' backdropBlur='2px'/>
      <ModalContent >
        <ModalHeader>Brc20 Transfer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            h={"100%"}
            columnGap={"30px"}
            rowGap={"12px"}
            mt={0}
          >
            <Flex w={"100%"}>
              <Box className={"selectorLeftSide selectorColor"}>Brc20 Text</Box>
              <Box className={"selectorDropDown"}>
                <InputGroup size={"md"}>
                  <Text fontSize='11px'>
                    {"{"} "p":"brc-20","op":"transfer","tick":"{assetSelected.name}","amt":"{parseFloat(ordinalAmount)}","chain": "{toBlockchain.key}",
                    "evmaddress":"{evmAddress}" {"}"}
                  </Text>
                  <InputLeftAddon
                    backgroundColor={"transparent"}
                    borderColor={"transparent"}
                    paddingRight={"0"}
                  >
                    <IconButton
                      onClick={() => copyToClipboard(brccontent)}
                      variant={"unstyled"}
                      maxW={"20px"}
                      minW={"20px"}
                      maxH={"20px"}
                      _active={{
                        backgroundColor: "white",
                        opacity: "0.15",
                      }}
                      style={{
                        width: "0px!important",
                      }}
                      icon={
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5.60625V13.625C4.99988 14.4184 5.30154 15.1821 5.8438 15.7613C6.38606 16.3405 7.12831 16.6917 7.92 16.7437L8.125 16.75H13.6425C13.5133 17.1155 13.2739 17.432 12.9574 17.6559C12.6408 17.8797 12.2627 17.9999 11.875 18H7.5C6.50544 18 5.55161 17.6049 4.84835 16.9017C4.14509 16.1984 3.75 15.2446 3.75 14.25V7.375C3.7498 6.98709 3.86991 6.60867 4.09379 6.29189C4.31766 5.9751 4.63428 5.73555 5 5.60625ZM14.375 3C14.8723 3 15.3492 3.19754 15.7008 3.54917C16.0525 3.90081 16.25 4.37772 16.25 4.875V13.625C16.25 14.1223 16.0525 14.5992 15.7008 14.9508C15.3492 15.3025 14.8723 15.5 14.375 15.5H8.125C7.62772 15.5 7.15081 15.3025 6.79917 14.9508C6.44754 14.5992 6.25 14.1223 6.25 13.625V4.875C6.25 4.37772 6.44754 3.90081 6.79917 3.54917C7.15081 3.19754 7.62772 3 8.125 3H14.375ZM14.375 4.25H8.125C7.95924 4.25 7.80027 4.31585 7.68306 4.43306C7.56585 4.55027 7.5 4.70924 7.5 4.875V13.625C7.5 13.7908 7.56585 13.9497 7.68306 14.0669C7.80027 14.1842 7.95924 14.25 8.125 14.25H14.375C14.5408 14.25 14.6997 14.1842 14.8169 14.0669C14.9342 13.9497 15 13.7908 15 13.625V4.875C15 4.70924 14.9342 4.55027 14.8169 4.43306C14.6997 4.31585 14.5408 4.25 14.375 4.25Z"
                            fill="url(#paint0_linear_291_1725)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_291_1725"
                              x1="3.75"
                              y1="3"
                              x2="18.2075"
                              y2="15.3503"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#5D07F9" />
                              <stop offset="1" stopColor="#05F0B0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      }
                      aria-label={"copy"}
                    />
                  </InputLeftAddon>
                </InputGroup>
              </Box>
            </Flex>
            <Button
              width={"100%"}
              className={"CTAButton"}
              variant={"gradient"}
              _disabled={{ opacity: "0.4" }}
              _hover={{
                opacity:"0.65",
                cursor: "pointer",
              }}
              onClick={() => {copyToClipboard(brccontent); window.open("https://unisat.io/inscribe", "_blank")}}
            >
              {"Inscribe"}
            </Button>
            <Flex w={"100%"}>
              <Box className={"selectorLeftSide selectorColor"}>Inscription ID</Box>
              <Box className={"selectorDropDown"}>
                <InputGroup size={"md"}>
                  <Input
                    placeholder="Input inscrioption id"
                    width={"100%"}
                    variant={"unstyled"}
                    value={inscriptionId}
                    onChange={(e) => {
                      setInscriptionId(e.target.value)
                    }}
                    backgroundColor={"rgba(255, 255, 255, 0.05)"}
                    paddingY={"8px"}
                    paddingX={"10px"}
                    color={"white"}
                    textAlign={"right"}
                  />
                </InputGroup>
              </Box>
            </Flex>
            <Button
              width={"100%"}
              className={"CTAButton"}
              variant={"gradient"}
              _disabled={{ opacity: "0.4" }}
              _hover={{
                opacity:"0.65",
                cursor: "pointer",
              }}
              onClick={() => {handleBrcTransfer()}}
            >
              {"Transfer"}
            </Button>
          </Box>
        </ModalBody>

        <ModalFooter>
          {/*<Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>*/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InscribeModal;

import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";
import { useEffect, useRef, useState } from "react";
import PopoverChainSelector from "../../../Shared/PopoverChainSelector.jsx";
import { getChainsService } from "../../../../services/getChains.js";

const ToSelector = ({ toBlockchain }) => {
  const initialFocusRef = useRef();
  const [blockchainList, setBlockchainList] = useState([]);
  const [blockchainSelectedTo, setBlockchainSelectedTo] = useState(toBlockchain);
  const updateState = useBlockchainStore((state) => state.setBlockchainTo);
  
  useEffect(() => {
    getChainsService().then((result) => {
      setBlockchainList(result);
      updateState(result[1]);
    });
  }, [updateState]);

  useEffect(() => {
    updateState(blockchainSelectedTo);
  }, [blockchainSelectedTo, updateState]);

  return (
    <Flex>
      <Box className={"selectorLeftSide selectorColor"}>To</Box>
      <Box className={"selectorDropDown"}>
        <Box display={"flex"} gap={"4px"} maxH={"24px"}>
          <Image
            src={toBlockchain.icon}
            alt={toBlockchain.name}
            boxSize={"24px"}
          />
          <Text
            maxW={"105px"}
            fontSize={"16px"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
          >
            {toBlockchain.name}
          </Text>
        </Box>
        <PopoverChainSelector
          initialRef={initialFocusRef}
          currentValue={blockchainSelectedTo}
          valueSetter={setBlockchainSelectedTo}
          availableList={blockchainList}
        />
      </Box>
    </Flex>
  );
};

export default ToSelector;

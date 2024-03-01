import { Box, Text, Image } from "@chakra-ui/react";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";
import { useEffect, useRef, useState } from "react";
import PopoverChainSelector from "../../../Shared/PopoverChainSelector.jsx";
import { getChainsService } from "../../../../services/getChains.js";
import { useStateStore } from "../../../../store/stateStore.js";

const FromSelector = ({ fromBlockchain }) => {
  const initialFocusRef = useRef();
  const [blochchainList, setBlockchainList] = useState([]);
  const [blockchainSelected, setBlockchainSelected] = useState(fromBlockchain);
  const updateState = useBlockchainStore((state) => state.setBlockchainFrom);

  const swapState = useStateStore((state) => state.swapState);

  useEffect(() => {
    getChainsService().then((result) => {
      setBlockchainList(result);
      swapState === "CLAIM"
        ? setBlockchainSelected(result[1])
        : updateState(result[0]);
    });
  }, []);

  useEffect(() => {
    updateState(blockchainSelected);
  }, [blockchainSelected]);

  return (
    <Box
      className={"swapContainer"}
      filter="auto"
      backdropBlur={"15px"}
      mb={"20px"}
    >
      <Box className={"selectorLeftSide selectorColor"}>From</Box>
      <Box className={"selectorDropDown"}>
        <Box display={"flex"} gap={"4px"}>
          <Image src={fromBlockchain.icon} width={"24px"} height={"24px"} alt={fromBlockchain.name} />
          <Text fontSize={"16px"}>{fromBlockchain.name}</Text>
        </Box>
        <PopoverChainSelector
          initialRef={initialFocusRef}
          currentValue={blockchainSelected}
          valueSetter={setBlockchainSelected}
          availableList={blochchainList}
        />
      </Box>
    </Box>
  );
};

export default FromSelector;

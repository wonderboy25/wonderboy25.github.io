import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PopoverChainSelector from "../../../Shared/PopoverChainSelector.jsx";
import { useEffect, useRef, useState } from "react";
import { useOrdinalStore } from "../../../../store/ordinalStore.js";
import { getAssetsService } from "../../../../services/getAssets.js";

const AssetSelector = () => {
  const initialFocusRef = useRef();
  const [ordinalList, setOrdinalList] = useState([]);
  const assetSelected = useOrdinalStore((state) => state.ordinal);
  const [ordinalSelected, setOrdinalSelected] = useState(assetSelected);
  const updateState = useOrdinalStore((state) => state.setOrdinal);

  useEffect(() => {
    getAssetsService().then((result) => {
      setOrdinalList(result);
      updateState(result[0]);
      setOrdinalSelected(result[0]);
    });
  }, [updateState]);

  useEffect(() => {
    updateState(ordinalSelected);
  }, [ordinalSelected, updateState]);

  return (
    <Flex w={"100%"}>
      <Box className={"selectorLeftSide selectorColor"}>Asset</Box>
      <Box className={"selectorDropDown"}>
        <Box display={"flex"} gap={"4px"}>
          <Image src={ordinalSelected.icon} alt={"asset"} boxSize={"24px"} />
          <Text fontSize={"16px"}>{ordinalSelected.name}</Text>
        </Box>
        <PopoverChainSelector
          initialRef={initialFocusRef}
          availableList={ordinalList}
          currentValue={ordinalSelected}
          valueSetter={setOrdinalSelected}
        />
      </Box>
    </Flex>
  );
};

export default AssetSelector;

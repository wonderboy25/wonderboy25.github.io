import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import PopoverChainSelector from "../../../Shared/PopoverChainSelector.jsx";
import { useEffect, useRef, useState } from "react";
import { useClaimStore } from "../../../../store/claimStore.js";
import { getAssetsService } from "../../../../services/getAssets.js";

const AssetClaimSelector = () => {
  const initialFocusRef = useRef();
  const [ordinalList, setOrdinalList] = useState([]);
  const assetSelected = useClaimStore((state) => state.ordinal);
  const [ordinalSelected, setOrdinalSelected] = useState(assetSelected);
  const updateState = useClaimStore((state) => state.setOrdinal);
  const amount = useClaimStore((state) => state.amount);

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
      <Box className={"selectorLeftSide selectorColor"}>Claim Asset</Box>
      <Input
            placeholder="Claimable amount"
            width={"60%"}
            variant={"unstyled"}
            value={amount}
            disabled
            backgroundColor={"rgba(255, 255, 255, 0.05)"}
            paddingY={"8px"}
            paddingX={"10px"}
            color={"white"}
            textAlign={"right"}
          />
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

export default AssetClaimSelector;

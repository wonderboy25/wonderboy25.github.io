import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { useOrdinalStore } from "../../../../store/ordinalStore.js";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";

const AmountSelector = () => {
  const assetSelected = useOrdinalStore((state) => state.ordinal);
  const ordinalAmount = useOrdinalStore((state) => state.amount);
  const setOrdinalAmount = useOrdinalStore((state) => state.setAmount);
  const ballanceAmount = useOrdinalStore((state) => state.ballance);
  const selectedChain = useBlockchainStore((state) => state.blockchainFrom);

  return (
    <Flex w={"100%"}>
      <Box className={"selectorLeftSide selectorColor"}>Amount</Box>
      <Box className={"selectorDropDown"}>
        <InputGroup size={"md"}>
          {selectedChain.name !== "Bitcoin" && (
            <InputRightAddon
              backgroundColor={"transparent"}
              borderColor={"transparent"}
              paddingLeft={"0"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                _hover={{ color: "brand.green" }}
              >
                <Button
                  variant={"unstyled"}
                  _hover={{ color: "brand.green" }}
                  _active={{ color: "whitesmoke" }}
                >
                  <Text fontSize={"14px"}>max</Text>
                  <Text fontSize={"10px"} color={"#8A8A8A"} m={"0"}>
                    {ballanceAmount} {assetSelected.symbol}
                  </Text>
                </Button>
              </Box>
            </InputRightAddon>
          )}
          <Input
            placeholder="Intro the amount to bridge"
            width={"75%"}
            variant={"unstyled"}
            value={ordinalAmount !== 0 ? ordinalAmount : ""}
            onChange={(e) => {
              setOrdinalAmount(e.target.value);
            }}
            backgroundColor={"rgba(255, 255, 255, 0.05)"}
            paddingY={"8px"}
            paddingX={"10px"}
            color={"white"}
            textAlign={"right"}
          />
          <InputLeftAddon
            backgroundColor={"transparent"}
            borderColor={"transparent"}
            paddingRight={"0"}
          >
            <Box display={"flex"} gap={"4px"} alignContent={"center"}>
              <Text fontSize={"16px"}>{assetSelected.symbol}</Text>
              <Image src={assetSelected.icon} alt={"asset"} boxSize={"24px"} />
            </Box>
          </InputLeftAddon>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default AmountSelector;

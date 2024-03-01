import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { truncateAddress } from "/src/utils/helper.js";

const WalletAddressContainer = () => {
  const { address } = useAccount();
  const [isLargerThan600] = useMediaQuery("(min-width: 1150px)");

  return (
    <>
      <Box className={"swapContainer"} mb={"20px"}>
        <Box className={"selectorLeftSide selectorColor"}>Address</Box>
        <Box
          className={"selectorDropDown"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
        >
          <Box display={"flex"} gap={"4px"}>
            <Text fontSize={"16px"} fontWeight={500}>
              {isLargerThan600 ? address : truncateAddress(address)}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WalletAddressContainer;

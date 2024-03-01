import { Flex } from "@chakra-ui/react";
import "./style.css";
import "../sharedStyles.css";
import TokenInfoHeader from "./Components/TokenInfoHeader.jsx";
import TokenPriceComponent from "./Components/TokenPrice.jsx";
import "./style.css";
import TokenMintedInfo from "./Components/TokenMintInfo.jsx";
import { useOrdinalStore } from "../../../store/ordinalStore.js";

const TokenInfo = () => {
  const ordinalSelected = useOrdinalStore((state) => state.ordinal);

  return (
    <Flex
      className={"cardBorder"}
      ml={0}
      py={"30px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      h={"100%"}
    >
      <TokenInfoHeader />
      <TokenPriceComponent
        tokenInfo={ordinalSelected}
        tokenPrice={Number(ordinalSelected.latestPriceUSD)
          .toFixed(Number(ordinalSelected.decimals))
          .toString()}
      />
      <TokenMintedInfo mintedInfo={ordinalSelected.contracts} />
    </Flex>
  );
};

export default TokenInfo;

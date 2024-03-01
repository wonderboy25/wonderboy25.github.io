import { Box, Text } from "@chakra-ui/react";
import "../style.css";

const TokenPriceComponent = (props) => {
  const { tokenInfo, tokenPrice } = props;

  return (
    <Box className={"infoContainer"}>
      <Box className={"priceContainer"} alignItems={"center"}>
        <Box display={"flex"} maxH={"24px"} alignItems={"center"}>
          <img
            src={tokenInfo.icon}
            alt={tokenInfo.symbol}
            width={"24px"}
            height={"24px"}
          />
          <Text
            marginLeft={"4px"}
            fontSize={{ base: "14px", xl: "20px" }}
            fontWeight={{ base: "400", xl: "600" }}
          >
            {tokenInfo.name}
          </Text>
        </Box>
        <Text
          fontSize={{ base: "14px", xl: "20px" }}
          fontWeight={{ base: "400", xl: "600" }}
        >
          <span style={{ marginRight: "4px" }}>$</span>
          {tokenPrice}
        </Text>
      </Box>
    </Box>
  );
};

export default TokenPriceComponent;

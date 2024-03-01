import { Flex, Text } from "@chakra-ui/react";
import "../style.css";

const TokenInfoHeader = () => {
  return (
    <Flex
      className={"infoContainer"}
      mb={0}
      mt={0}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Text fontSize={{ base: "24", xl: "28px" }} fontWeight={"600"}>
        Token Information
      </Text>
    </Flex>
  );
};

export default TokenInfoHeader;

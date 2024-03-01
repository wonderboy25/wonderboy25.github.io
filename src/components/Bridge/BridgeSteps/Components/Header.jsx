import { Box, Text } from "@chakra-ui/react";
import "../style.css";

const StepsHeader = () => {
  return (
    <Box
      className={"stepsContainer"}
      display={"flex"}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Text fontSize={"20px"}>
        <span style={{ whiteSpace: "nowrap" }}>Cross-Chain</span> Steps
      </Text>
    </Box>
  );
};

export default StepsHeader;
